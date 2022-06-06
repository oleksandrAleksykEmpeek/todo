import { createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../service/apiService';
import { thunkLogin } from './thunk/login';
import api from '../../service/index';
export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
  },
  reducers: {
    setAuthState: (state, action) => {
      console.log('setAuthState' + action.payload);
      state.isAuth = action.payload;
    },
    selectState: state => state.isAuth,
    login: () => {},
  },
});

export const { setAuthState, selectState, login } = auth.actions;

export default auth.reducer;
