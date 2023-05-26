import axios from 'axios';
const token = 'your_token_here';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const api = axios.create({
  baseURL: 'https://api.example.com', 
});

api.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = axios.defaults.headers.common['Authorization'];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);