import axios from 'axios';

const databaseURL = import.meta.env.VITE_DATABASE_URL;

const api = axios.create({
  baseURL: databaseURL
});

export default api;