import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveLogin, removeLogin, getToken } from '../../helpers/storage';
import APIURL from '../../helpers/staticSharedVariables';

const AuthURL = APIURL();

const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  const data = {
    api_v1_user: {
      ...userData,
    },
  };
  try {
    const response = await axios.post(`${AuthURL}/login`, data);
    saveLogin({
      ...response,
      data: {
        data: {
          user: response.data.status.data.user,
        },
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const signupUser = createAsyncThunk('auth/signupUser', async (userData, { rejectWithValue }) => {
  const data = {
    api_v1_user: {
      ...userData,
      name: userData.username,
      password_confirmation: userData.passwordConfirmation,
    },
  };
  try {
    const response = await axios.post(`${AuthURL}/signup`, data);
    saveLogin(response);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  const headers = {
    authorization: getToken(),
  };

  try {
    const response = await axios.delete(`${AuthURL}/logout`, { headers });
    removeLogin();
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      removeLogin();
      window.location.reload();
      return rejectWithValue('You need to login');
    }
    return rejectWithValue(error.message);
  }
});

export { loginUser, signupUser, logoutUser };
