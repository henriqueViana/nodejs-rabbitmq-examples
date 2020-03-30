# RabbitMQ with NodeJS examples &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]

These examples cover the most common implementation models with RabbitMQ.

* **Workers**
* **Publish / Subscribe**
* **RPC**

## Requirements

You need [Node.js](https://nodejs.org/en/download/)and you will need a running [RabbitMQ](https://www.rabbitmq.com/download.html) server.

## Quick Overview

For these examples you will have to clone the project and install the [amqplib](https://www.npmjs.com/package/amqplib) package

*cloning the project*
```sh
git clone https://github.com/henriqueViana/nodejs-rabbitmq-examples.git
```

*install dependencies*

```sh
npm i -S amqplib

#### *OR*

yarn add amqplib
```

## Get Started

### Workers

*Callback Example*:
```sh
node src/workers/callback/publisher.js
node src/workers/callback/worker.js
```


*Promise Example*:
```sh
node src/workers/promise/publisher.js
node src/workers/promise/worker.js
```
