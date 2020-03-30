const amqp = require('amqplib')
const url = 'amqp://localhost'

const init = async () => {
  let conn
  let channel

  try {
    conn = await amqp.connect(url)
  } catch(err) {
    throw err
  }

  try {
    channel = await conn.createChannel()
  } catch(err) {
    throw(err)
  }

  const queue = 'queuePromise'

  channel.assertQueue(queue, { durable: true })

  channel.consume(queue, message => {
    console.log('Message is: ', message.content.toString())
  }, { noAck: true})

  console.log('wait message....')
}

init()