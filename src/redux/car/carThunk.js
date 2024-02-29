import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getToken, removeLogin } from '../../helpers/storage';
import APIURL from '../../helpers/staticSharedVariables';

const BASE_URL = APIURL();
const CARS_PATH = '/cars';

const getHeaders = () => (
  { headers: { authorization: getToken() } }
);
export const fetchCars = createAsyncThunk(
  'car/fetchCars',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`${BASE_URL}${CARS_PATH}`, getHeaders());
      return resp.data;
    } catch (error) {
      if (error.response.status === 401) {
        removeLogin();
        return rejectWithValue('You need to login');
      }
      if (error.response.status === 403) {
        return rejectWithValue('You are not authorized for this action');
      }
      return rejectWithValue(error.message);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'car/deleteCar',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}${CARS_PATH}/${id}`, getHeaders());
      return id;
    } catch (error) {
      if (error.response.status === 401) {
        removeLogin();
        return rejectWithValue('You need to login');
      }
      if (error.response.status === 403) {
        return rejectWithValue('You are not authorized for this action');
      }
      return rejectWithValue(error.message);
    }
  },
);

export const addCar = createAsyncThunk(
  'car/addCar',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}${CARS_PATH}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: getToken(),
        },
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        removeLogin();
        return rejectWithValue('You need to login');
      }
      if (error.response.status === 403) {
        return rejectWithValue('You are not authorized for this action');
      }
      return rejectWithValue(error.message);
    }
  },
);
