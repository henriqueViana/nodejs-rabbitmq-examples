const amqp = require('amqplib')
const url = 'amqp://localhost'

const createConnection = async () => {
  try {
    return await amqp.connect(url)
  } catch (err) {
    throw err
  }
}

const createChannel = async conn => {
  try {
    return await conn.createChannel()
  } catch (err) {
    throw err
  }
}

const init = async () => {
  const conn = await createConnection()
  const channel = await createChannel(conn)

  const queue = 'queuePromise'
  const message = 'queue with promise'

  channel.assertQueue(queue, { durable: true })
  channel.sendToQueue(queue, Buffer.from(message))

  console.log('publisher is working')

  closeConnectionQueue(conn)
}

const closeConnectionQueue = conn => {
  setTimeout(() => {
    conn.close()
    process.exit(0)
  }, 500)
}

init()
