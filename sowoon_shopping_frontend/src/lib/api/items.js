import client from './client';

export const inputItems = ({ name, content, price, tags }) => {
  client.post('/api/input', { name, content, price, tags });
  console.log('click4');
};
