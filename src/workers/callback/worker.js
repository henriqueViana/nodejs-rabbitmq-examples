const amqp = require('amqplib/callback_api')
const url = 'amqp://localhost'

amqp.connect(url, (err, conn) => {
  if (err) {
    throw err
  }

  conn.createChannel((err, channel) => {
    const queueName = 'queueUser'

    channel.assertQueue(queueName, { durable: true })

    console.log('wait message....')

    channel.consume(queueName, message => {
      console.log('message: ', message.content.toString())
    }, { noAck: true })
  })
})