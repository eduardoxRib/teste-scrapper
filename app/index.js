import Fastify from 'fastify'
import { iphone14 } from './products/iphone.js'
import { getRandomIntInclusive } from './helpers.js'
import { smartwatch } from './products/smartwatch.js'
import { notebook } from './products/notebook.js'
const fastify = Fastify({
  logger: false
})

process.on('uncaughtException', error => {
  console.error(error?.message)
})

process.on('unhandledRejection', reason => {
  console.error(reason)
})

fastify.get('/search', function (request, reply) {
  const random = getRandomIntInclusive(1, 100)
  if (random <= 10) {
    console.log('Service Unavailable - ', new Date().toLocaleDateString())
    return reply.status(503).send('Service Unavailable')
  }
  
  const query = request.query?.text
  console.log(`${query} - ${new Date().toLocaleDateString()}`)

  if (!query || typeof query !== 'string') {
    return reply.status(400).send({ error: 'Invalid query.' })
  }

  if (['iphone 14', 'iphone'].includes(query.toLowerCase())) {
    return iphone14(reply)
  }

  if (['smartwatch', 'amazfit', 'amazfit gts', 'amazfit gts 4', 'amazfit 4'].includes(query.toLowerCase())) {
    return smartwatch(reply)
  }

  if (['notebook', 'samsung book2', 'book2'].includes(query.toLowerCase())) {
    return notebook(reply)
  }

  reply.status(404).send('Product not found.')
})

fastify.listen({ port: 26500, host: '127.0.0.1' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.info('Address: ', address)
})
