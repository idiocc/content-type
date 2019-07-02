import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import contentType from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await contentType({
      text: this.input,
    })
    return res
  },
  context: Context,
})