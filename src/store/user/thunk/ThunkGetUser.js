import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../../service/apiService';

export const ThunkGetUser = createAsyncThunk('user/get-user', async userId => {
  const user = await apiService(`/users?id=${userId}`, 'get');
  return user;
});
