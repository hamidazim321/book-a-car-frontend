import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const signupUser = createAsyncThunk('auth/signupUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/auth/signup', userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/auth/logout');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { loginUser, signupUser, logoutUser };
