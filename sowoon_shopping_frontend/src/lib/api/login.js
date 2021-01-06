import client from './client';

export const loginUser = ({ name, email, image }) =>
  client.post('/api/login', { name, email, image });

export const registerUser = ({ name, email, image, password }) =>
  client.post('/api/register', { name, email, image, password });

export const registerCheck = ({ email }) =>
  client.post('/api/register/check', { email });
