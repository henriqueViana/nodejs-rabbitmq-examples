require('dotenv').config()

const amqp = require('amqplib/callback_api')
const url = process.env.RABBITMQ_URL || 'amqp://localhost'

amqp.connect(url, (err, conn) => {
  if (err) {
    throw err
  }

  conn.createChannel((err, channel) => {
    const queueName = 'queueUser'
    const message = {
      'name': 'User',
      'email': 'user@gmail.com'
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