const amqp = require('amqplib')
const url = 'amqp://localhost'

const init = async () => {
  let conn
  let channel

  try {
    conn = await amqp.connect(url)
  } catch (err) {
    throw err
  }

  try {
    channel = await conn.createChannel()
  } catch (err) {
    throw err
  }

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
