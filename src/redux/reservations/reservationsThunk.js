import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import APIURL from '../../helpers/staticSharedVariables';
import { getToken, removeLogin } from '../../helpers/storage';

const ReservationsURL = `${APIURL()}/reservations`;

export const getReservations = createAsyncThunk('reservations/getReservations', async (_, { rejectWithValue }) => {
  const headers = {
    authorization: getToken(),
  };
  try {
    const response = await axios.get(ReservationsURL, { headers });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      removeLogin();
      return rejectWithValue('You need to login');
    }
    return rejectWithValue(error.message);
  }
});

export const createReservation = createAsyncThunk('reservations/createReservation', async (reservationData, { rejectWithValue }) => {
  const headers = {
    authorization: getToken(),
  };
  try {
    const response = await axios.post(ReservationsURL, reservationData, { headers });
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

export const deleteReservation = createAsyncThunk('reservations/deleteReservation', async (reservationId, { rejectWithValue }) => {
  const headers = {
    authorization: getToken(),
  };
  try {
    await axios.delete(`${ReservationsURL}/${reservationId}`, { headers });
    return { id: reservationId };
  } catch (error) {
    if (error.response.status === 401) {
      removeLogin();
      window.location.reload();
      return rejectWithValue('You need to login');
    }
    return rejectWithValue(error.message);
  }
});
