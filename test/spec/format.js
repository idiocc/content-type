import { equal } from '@zoroaster/assert'
import { throws } from 'assert'
import { format } from '../../src'

export default {
  'formats basic type'() {
    const str = format({ type: 'text/html' })
    equal(str, 'text/html')
  },
  'formats type with suffix'() {
    const str = format({ type: 'image/svg+xml' })
    equal(str, 'image/svg+xml')
  },
  'formats type with parameter'() {
    const str = format({
      type: 'text/html',
      parameters: { charset: 'utf-8' },
    })
    equal(str, 'text/html; charset=utf-8')
  },
  'formats type with parameter that needs quotes'() {
    const str = format({
      type: 'text/html',
      parameters: { foo: 'bar or "baz"' },
    })
    equal(str, 'text/html; foo="bar or \\"baz\\""')
  },
  'formats type with parameter with empty value'() {
    const str = format({
      type: 'text/html',
      parameters: { foo: '' },
    })
    equal(str, 'text/html; foo=""')
  },
  'format type with multiple parameters'() {
    const str = format({
      type: 'text/html',
      parameters: { charset: 'utf-8', foo: 'bar', bar: 'baz' },
    })
    equal(str, 'text/html; bar=baz; charset=utf-8; foo=bar')
  },
  'requires argument'() {
    throws(format.bind(null), /argument obj is required/)
  },
  'rejects non-objects'() {
    throws(format.bind(null, 7), /argument obj is required/)
  },
  'requires type'() {
    const obj = {}
    throws(format.bind(null, obj), /invalid type/)
  },
  'rejects invalid type'() {
    const obj = { type: 'text/' }
    throws(format.bind(null, obj), /invalid type/)
  },
  'rejects invalid type with LWS'() {
    const obj = { type: ' text/html' }
    throws(format.bind(null, obj), /invalid type/)
  },
  'rejects invalid parameter name'() {
    const obj = { type: 'image/svg', parameters: { 'foo/': 'bar' } }
    throws(format.bind(null, obj), /invalid parameter name/)
  },
  'rejects invalid parameter value'() {
    const obj = { type: 'image/svg', parameters: { 'foo': 'bar\u0000' } }
    throws(format.bind(null, obj), /invalid parameter value/)
  },
}