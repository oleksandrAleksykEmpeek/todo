import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.isAuth = action.payload;
    },
    selectState: state => state.isAuth,
  },
});

export const { setAuthState, selectState } = auth.actions;

export default auth.reducer;
