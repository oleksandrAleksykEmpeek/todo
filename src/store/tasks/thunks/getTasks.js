import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../service';

export const ThunkGetTasks = createAsyncThunk('task/get-tasks', async (userId) => {
  console.log(userId)
  const tasks = await api.tasks.getTasks(1);
});
