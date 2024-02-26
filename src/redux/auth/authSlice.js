import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser } from './authThunk';

const initialState = {
  loading: false,
  error: null,
  success: null,
  info: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthMessages: (state) => ({
      ...state,
      success: null,
      error: null,
      info: null,
    }),
  },
  extraReducers(builder) {
    builder

      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        success: `Welcome back ${payload.status.data.user.name}!`,
      }))
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))

      .addCase(signupUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signupUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        success: `Welcome ${action.payload.data.user.name}!`,
      }))
      .addCase(signupUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))

      .addCase(logoutUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(logoutUser.fulfilled, (state) => ({
        ...state,
        loading: false,
        success: 'You have been logged out',
      }))
      .addCase(logoutUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export const { clearAuthMessages } = authSlice.actions;
export default authSlice.reducer;
