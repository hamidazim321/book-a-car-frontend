import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveLogin, removeLogin } from '../../helpers/storage';

const URL = 'https://dummyjson.com/auth';

const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${URL}/login`, userData);
    saveLogin(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const signupUser = createAsyncThunk('auth/signupUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/v1/auth/signup', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/v1/auth/logout');
    removeLogin();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { loginUser, signupUser, logoutUser };
