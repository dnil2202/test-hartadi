import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 50000,
  headers:{
    'Authorization': `Bearer ${localStorage.getItem('etrade')}`
}
})

export default instance;