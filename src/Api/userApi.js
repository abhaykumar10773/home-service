import axiosInstance from './axiosConfig';

export const registerUserApi = async (userData) => {
  return await axiosInstance.post('/users/register', userData);
};

export const loginUserApi = async (credentials) => {
  return await axiosInstance.post('/users/login', credentials);
};

export const logoutUserApi = async () => {
  try {
    return await axiosInstance.post('/users/logout', {}, 
      { withCredentials: true }
    );
  } catch (error) {
    console.error('Logout failed:', error.response?.data || error.message);
  }
 
};