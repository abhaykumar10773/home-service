// src/features/auth/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi , registerUserApi ,logoutUserApi } from '../../api/userApi';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUserApi(credentials);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Login failed');
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUserApi(userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || 'Registration failed');
  }
});
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await logoutUserApi();
    localStorage.removeItem('user');
   

    return response.data;
  } catch (error) {
    return rejectWithValue('Logout failed');
  }
});