import client from './client';

export const loginUser = ({ email, password }) =>
  client.post('/api/login', { email, password });

export const registerUser = ({ name, email, image, password }) =>
  client.post('/api/register', { name, email, image, password });

export const registerCheck = ({ email }) =>
  client.post('/api/register/check', { email });
