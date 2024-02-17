import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3001';
const CARS_PATH = '/cars';
export const fetchCars = createAsyncThunk(
  'car/fetchCars',
  async () => {
    try {
      const resp = await axios.get(BASE_URL + CARS_PATH);
      return resp.data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'car/deleteCar',
  async (id) => {
    try {
      await axios.delete(`${BASE_URL}${CARS_PATH}${id}`);
      return id;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  },
);
