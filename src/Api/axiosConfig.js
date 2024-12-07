import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1', //yha change nhi kna hai na hi variable name 
});

export default axiosInstance;
