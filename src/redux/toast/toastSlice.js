import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  success: null,
  info: null,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastError(state, { payload }) {
      return {
        ...state,
        error: payload,
      };
    },
    toastSuccess(state, { payload }) {
      return {
        ...state,
        success: payload,
      };
    },
    toastInfo(state, { payload }) {
      return {
        ...state,
        info: payload,
      };
    },
    clearToast(state) {
      return {
        ...state,
        error: null,
        success: null,
        info: null,
      };
    },
  },
});

export default toastSlice.reducer;
export const {
  toastError, toastSuccess, clearToast, toastInfo,
} = toastSlice.actions;
