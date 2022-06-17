import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import auth from './auth';
import tasks from './tasks';
import user from './user';

export default configureStore({
  reducer: {
    auth,
    tasks,
    user,
  },
  middleware: [thunk],
});
