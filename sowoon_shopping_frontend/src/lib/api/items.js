import client from './client';

export const inputItems = ({ name, content, price, thumbnail, tags }) =>
  client.post('/api/input', { name, content, price, thumbnail, tags });

export const readItem = (id) => client.get(`/api/item/${id}`);

export const listItem = () => client.get('/api/item');
