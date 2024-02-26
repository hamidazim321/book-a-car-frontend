import { createSlice } from '@reduxjs/toolkit';
import { addCar, deleteCar, fetchCars } from './carThunk';

const initialState = {
  cars: [],
  loading: false,
  error: null,
  success: null,
  info: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    clearCarMessages: (state) => ({
      ...state,
      success: null,
      error: null,
      info: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => ({
        ...state,
        loading: true,
        error: false,
      }))
      .addCase(fetchCars.fulfilled, (state, { payload }) => ({
        ...state,
        cars: payload,
        loading: false,
        error: false,
      }))
      .addCase(fetchCars.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(deleteCar.pending, (state) => ({
        ...state,
        loading: true,
        error: false,
      }))
      .addCase(deleteCar.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: false,
        cars: state.cars.filter((car) => car.id !== payload),
        success: 'Car deleted successfully',
      }))
      .addCase(deleteCar.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }))
      .addCase(addCar.pending, (state) => ({
        ...state,
        loading: true,
        error: false,
      }))
      .addCase(addCar.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        cars: [...state.cars, payload],
        success: 'Car added successfully',
      }))
      .addCase(addCar.rejected, (state, { payload }) => ({
        ...state,
        error: payload,
        loading: false,
      }));
  },
});

export const { clearCarMessages } = carSlice.actions;
export default carSlice.reducer;
