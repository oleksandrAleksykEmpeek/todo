import { createSlice } from '@reduxjs/toolkit';

import { ActionSetAuthState } from './actions/setAuthState';
import { ActionSetUser } from '../user/actions';
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
      ActionSetUser(action.payload[0]);
      ActionSetAuthState(state, { status: true, userId: action.payload[0].id });
    });
    builder.addCase(ThunkLoginUser.rejected, (state, action) => {
      console.error(action.error.message);
    });
  },
});

export const { setAuthState } = auth.actions;

export default auth.reducer;
