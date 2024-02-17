import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carSlice from './car/carSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carSlice,
  },
});

export default store;
