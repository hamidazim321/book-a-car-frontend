import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carSlice from './car/carSlice';
import reservationsReducer from './reservations/reservationsSlice';
import toastSlice from './toast/toastSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carSlice,
    reservations: reservationsReducer,
    toast: toastSlice,
  },
});

export default store;
