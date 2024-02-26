import { createSlice } from '@reduxjs/toolkit';
import { getReservations, createReservation, deleteReservation } from './reservationsThunk';

const initialState = {
  reservations: [],
  loading: false,
  error: null,
  success: null,
  info: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    clearReservationsMessages: (state) => ({
      ...state,
      success: null,
      error: null,
      info: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservations: action.payload,
        success: 'Reservations fetched successfully',
      }))
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))

      .addCase(createReservation.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(createReservation.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservations: [...state.reservations, action.payload],
        success: 'Reservation created successfully',
      }))
      .addCase(createReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))

      .addCase(deleteReservation.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(deleteReservation.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
        success: 'Reservation deleted successfully',
      }))
      .addCase(deleteReservation.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export const { clearReservationsMessages } = reservationsSlice.actions;
export default reservationsSlice.reducer;
