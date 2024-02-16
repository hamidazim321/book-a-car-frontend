import { createSlice } from '@reduxjs/toolkit';
import { loginUser, signupUser, logoutUser } from './authThunk';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(loginUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
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
        user: action.payload.user,
        token: action.payload.token,
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
        user: null,
        token: null,
      }))
      .addCase(logoutUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
