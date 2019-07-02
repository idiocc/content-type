/* alanode example/ */
import contentType from '../src'

(async () => {
  const res = await contentType({
    text: 'example',
  })
  console.log(res)
})()