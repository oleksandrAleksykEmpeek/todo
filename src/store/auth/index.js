import { createSlice } from '@reduxjs/toolkit';

import { ActionSetAuthState } from './actions/setAuthState';
import { ThunkLoginUser } from './thunk/loginUser';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuthState: (state, action) => {
      ActionSetAuthState(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(ThunkLoginUser.fulfilled, (state, action) => {
      ActionSetAuthState(state, action.payload);
    });
  },
});

export const { setAuthState } = auth.actions;

export default auth.reducer;
