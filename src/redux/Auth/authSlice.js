import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: '',
    error: '',
    isLoggedIn: false,
    isRefresh: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = '';
        state.isLoggedIn = '';
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      });
  },
});

export const userReducer = slice.reducer;
