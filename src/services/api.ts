import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72',
});

export default api;
