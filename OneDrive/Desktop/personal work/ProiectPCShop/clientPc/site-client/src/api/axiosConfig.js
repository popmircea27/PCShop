import axios from 'axios';

export default axios.create({
  baseURL: '/api', 
  headers: { "ngrok-skip-browser-warning": "true" }
});
