import { format } from '../src'

const res = format({
  type: 'image/svg+xml',
  parameters: { charset: 'utf-8' },
})
console.log(res)