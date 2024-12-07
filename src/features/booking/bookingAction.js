// src/redux/bookingActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Searchprovider } from '../../Api/bookingApi';

export const searchProvider = createAsyncThunk(
    'booking/searchProvider',
    async ({ selectedService, serviceLocation }, { rejectWithValue }) => {
      try {
        const response = await Searchprovider(selectedService, serviceLocation);
        console.log('API Response:', response); // Debugging API response
        // const { data, locationName } = response.data;
        // return { providers: data, locationName };
        if (response && response.data.data) {
          return response.json(); // Return fetched data
        } else {
          console.log('No data received from API');
          throw new Error('No data received from API');
        }
      } catch (error) {
        console.error('Error occurred:', error); // Debugging errors
        const errorMessage =
          error.response?.data || error.message || 'Failed to fetch service providers';
        return rejectWithValue(errorMessage);
      }
    }
  );