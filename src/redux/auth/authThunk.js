import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveLogin, removeLogin } from '../../helpers/storage';
import APIURL from '../../helpers/staticSharedVariables';

const AuthURL = `${APIURL}/auth`;

const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${AuthURL}/login`, userData);
    saveLogin(response.data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const signupUser = createAsyncThunk('auth/signupUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${AuthURL}/signup`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${AuthURL}/logout`);
    removeLogin();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { loginUser, signupUser, logoutUser };
