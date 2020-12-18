import client from './client';

export const loginUser = ({ name, email, image }) =>
  client.post('/api/login', { name, email, image });
