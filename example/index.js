import { parse } from '../src'

const res = parse('image/svg+xml; charset=utf-8')
console.log(res)

const asRequest = parse({ headers: { // as IncomingMessage
  'content-type': 'image/svg+xml; charset=utf-8',
} })
console.log(asRequest)

const asResponse = parse({ getHeader(header) { // as ServerResponse
  if (header == 'content-type')
    return 'image/svg+xml; charset=utf-8'
} })
console.log(asResponse)