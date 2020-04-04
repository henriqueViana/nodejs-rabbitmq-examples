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

  channel.assertQueue(queue, { durable: true })

  channel.consume(queue, message => {
    console.log('Message is: ', message.content.toString())
  }, { noAck: true})

  console.log('wait message....')
}

init()