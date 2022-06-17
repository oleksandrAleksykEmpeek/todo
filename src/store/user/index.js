import { createSlice } from '@reduxjs/toolkit';

import { ActionSetUser } from './actions';
import { ThunkGetUser } from './thunk/ThunkGetUser';

export const user = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  extraReducers: builder => {
    builder.addCase(ActionSetUser, (state, action) => {
      state.user = action.payload;
      sessionStorage.setItem('firstName', action.payload.firstName);
    });
    builder.addCase(ThunkGetUser.fulfilled, (state, action) => {
      ActionSetUser(action.payload)
    } )
  },
});

export default user.reducer;
