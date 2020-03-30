const amqp = require('amqplib/callback_api')
const url = 'amqp://localhost'

amqp.connect(url, (err, conn) => {
  if (err) {
    throw err
  }

  conn.createChannel((err, channel) => {
    const queueName = 'queueUser'
    const message = {
      'name': 'Henrique',
      'email': 'henriquehvisa@gmail.com'
    }

    channel.assertQueue(queueName, { durable: true })
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)))

    console.log('publisher is working')

  })

  setTimeout(() => {
    conn.close()
    process.exit(0)
  }, 500)
})