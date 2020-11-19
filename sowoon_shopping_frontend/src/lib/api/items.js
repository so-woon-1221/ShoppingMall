import client from './client';

export const inputItems = ({ name, content, price, tags }) =>
  client.post('/api/input', { name, content, price, tags });

export const readItem = (id) => client.get(`/api/item/${id}`);
