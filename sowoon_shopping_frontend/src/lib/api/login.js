import client from './client';

export const loginUser = ({ email, password }) =>
  client.post('/api/login', { email, password });

export const registerUser = ({ name, email, image, password, cart }) =>
  client.post('/api/register', { name, email, image, password, cart });

export const registerCheck = ({ email }) =>
  client.post('/api/register/check', { email });

export const cartIn = ({ itemId, user }) =>
  client.post('/api/user/cartIn', { itemId, user });
