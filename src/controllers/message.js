import {APIError400} from "../errors.js";
import nanoid from "nano-id";
import log from "../log.js";
import sqs from "../sqs.js";

export const enqueue = async ({url}) => {
  if (!url) {
    throw new APIError400('url is required');
  }

  const message = { url }

  // put msg in queue fifo
  const params = {
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: JSON.stringify(message),
    MessageGroupId: 'group',
    MessageDeduplicationId: nanoid(10),
  };

  log.info('Sending message to queue', { params })

  await sqs.sendMessage(params).promise();

  log.info('Message sent to queue')

  return {
    message: 'enqueued',
  }
}