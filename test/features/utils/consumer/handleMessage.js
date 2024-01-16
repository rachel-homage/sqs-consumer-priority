const { Consumer } = require('../../../../dist/consumer');

const { QUEUE_URL, sqs } = require('../sqs');

const consumer = Consumer.create({
  queueUrls: [QUEUE_URL],
  sqs,
  pollingWaitTimeMs: 100,
  handleMessage: async (message) => {
    return message;
  }
});

exports.consumer = consumer;
