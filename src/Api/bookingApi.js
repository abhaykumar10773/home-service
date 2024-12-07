import axiosInstance from './axiosConfig';

export const createBooking = async (bookingData) => {
  return await axiosInstance.post('/bookings', bookingData);
};

export const Searchprovider = async (requestData) =>{  
    try {
      const response = await axiosInstance.post("/booking/searchServiceProviders", requestData);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("Error response:", error.response?.data || error.message);
    }
  
  
};