import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import contentType from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof contentType, 'function')
  },
  async 'calls package without error'() {
    await contentType()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await contentType({
      text,
    })
    ok(res, text)
  },
}

export default T