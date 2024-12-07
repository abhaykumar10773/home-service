// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser ,logoutUser } from '../auth/authAction';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    FullName: null,
    email: null,
    contact: null,
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { FullName, email, contact} = action.payload;
        state.FullName = FullName;
        state.email = email;
        state.contact = contact;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { FullName, email, contact } = action.payload;
        state.FullName = FullName;
        state.email = email;
        state.contact = contact;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.FullName = null;
        state.email = null;
        state.contact = null;
        state.password = null;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = null;
    });   
  },
});

// export const { logout } = authSlice.actions;
export default authSlice.reducer;
