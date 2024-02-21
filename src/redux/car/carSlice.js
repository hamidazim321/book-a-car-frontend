import { createSlice } from '@reduxjs/toolkit';
import { addCar, deleteCar, fetchCars } from './carThunk';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
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
      .addCase(fetchCars.rejected, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))
      .addCase(deleteCar.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(deleteCar.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        error: false,
        cars: state.cars.filter((car) => car.id !== payload),
      }))
      .addCase(deleteCar.rejected, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))
      .addCase(addCar.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(addCar.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        cars: [...state.cars, payload],
      }))
      .addCase(addCar.rejected, (state, { error }) => ({
        ...state,
        error,
        loading: false,
      }));
  },
});

export default carSlice.reducer;
