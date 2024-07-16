import axios from 'axios';

export const handler = async (event) => {
  console.log('event', event);

  // retrieve body from event arrived from SQS
  const { body } = event.Records[0];
  const message = JSON.parse(body);
  console.log('message', message);

  const { url } = message;

  const { data } = await axios.get(url);

  console.log('data', data);
};