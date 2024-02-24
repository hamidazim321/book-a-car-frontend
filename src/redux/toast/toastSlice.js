import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  error: null,
  success: null
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastError(state, { payload }) {
      return {
        ...state,
        error: payload
      }
    },
    toastSuccess(state, { payload }) {
      return {
        ...state,
        success: payload
      }
    },
    clearToast(state) {
      return {
        error: null,
        success: null
      }
    }
  }
})

export default toastSlice
export const { toastError, toastSuccess, clearToast } = toastSlice.actions