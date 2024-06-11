import axios from 'axios';

const api = axios.create({
  baseURL: 'https://65e1d3bba8583365b317693c.mockapi.io',
});

export default api;
