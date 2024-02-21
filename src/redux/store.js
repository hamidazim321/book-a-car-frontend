import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationsReducer,
  },
});

export default store;
