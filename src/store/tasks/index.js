import { createSlice } from '@reduxjs/toolkit';
import { ThunkGetTasks } from './thunks/getTasks';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  extraReducers: builder => {
    builder.addCase(ThunkGetTasks.fulfilled, (state, payload) => {
        
    });
  },
});

export default tasks.reducer;
