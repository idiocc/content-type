import { equal, deepEqual } from '@zoroaster/assert'
import { throws } from 'assert'
import { parse } from '../../src'

const invalidTypes = [
  ' ',
  'null',
  'undefined',
  '/',
  'text / plain',
  'text/;plain',
  'text/"plain"',
  'text/p£ain',
  'text/(plain)',
  'text/@plain',
  'text/plain,wrong',
]

export const Parse = {
  'parses basic type'() {
    const { type } = parse('text/html')
    equal(type, 'text/html')
  },
  'parses with suffix'() {
    const { type } = parse('image/svg+xml')
    equal(type, 'image/svg+xml')
  },
  'parses basic type with surrounding OWS'() {
    const { type } = parse(' text/html ')
    equal(type, 'text/html')
  },
  'parse parameters'() {
    const { type, parameters } = parse('text/html; charset=utf-8; foo=bar')
    equal(type, 'text/html')
    deepEqual(parameters, {
      charset: 'utf-8',
      foo: 'bar',
    })
  },
  'parse parameters with extra LWS'() {
    const { type, parameters } = parse('text/html ; charset=utf-8 ; foo=bar')
    equal(type, 'text/html')
    deepEqual(parameters, {
      charset: 'utf-8',
      foo: 'bar',
    })
  },
  'lower-case type'() {
    const { type } = parse('IMAGE/SVG+XML')
    equal(type, 'image/svg+xml')
  },
  'lower-case parameter names'() {
    const { type, parameters } = parse('text/html; Charset=UTF-8')
    equal(type, 'text/html')
    deepEqual(parameters, {
      charset: 'UTF-8',
    })
  },
  'unquotes parameter values'() {
    const { type, parameters } = parse('text/html; charset="UTF-8"')
    equal(type, 'text/html')
    deepEqual(parameters, {
      charset: 'UTF-8',
    })
  },
  'unquotes parameter values with escapes'() {
    const { type, parameters } = parse('text/html; charset = "UT\\F-\\\\\\"8\\""')
    equal(type, 'text/html')
    deepEqual(parameters, {
      charset: 'UTF-\\"8"',
    })
  },
  'handles balanced quotes'() {
    const { type, parameters } = parse('text/html; param="charset=\\"utf-8\\"; foo=bar"; bar=foo')
    equal(type, 'text/html')
    deepEqual(parameters, {
      param: 'charset="utf-8"; foo=bar',
      bar: 'foo',
    })
  },
  'throws on invalid media type'() {
    invalidTypes.forEach((type) => {
      throws(() => parse(type), /invalid media type/)
    })
  },
  'throws on invalid parameter format'() {
    throws(parse.bind(null, 'text/plain; foo="bar'), /invalid parameter format/)
    throws(parse.bind(null, 'text/plain; profile=http://localhost; foo=bar'), /invalid parameter format/)
    throws(parse.bind(null, 'text/plain; profile=http://localhost'), /invalid parameter format/)
  },
  'requires argument'() {
    throws(parse.bind(null), /string.*required/)
  },
  'rejects non-strings'() {
    throws(parse.bind(null, 7), /string.*required/)
  },
}

export const Req = {
  'parses content-type header'() {
    const req = { headers: { 'content-type': 'text/html' } }
    const { type } = parse(req)
    equal(type, 'text/html')
  },
  'rejects objects without headers property'() {
    throws(parse.bind(null, {}), /content-type header is missing/)
  },
  'rejects missing content-type'() {
    const req = { headers: {} }
    throws(parse.bind(null, req), /content-type header is missing/)
  },
}

export const rs = {
  'parses content-type header'() {
    var res = { getHeader: function () { return 'text/html' } }
    const { type  } = parse(res)
    equal(type, 'text/html')
  },
  'rejects objects without getHeader method'() {
    throws(parse.bind(null, {}), /content-type header is missing/)
  },
  'rejects missing content-type'() {
    var res = { getHeader: function () {} }
    throws(parse.bind(null, res), /content-type header is missing/)
  },
}

// export default T