import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from './auth';

export default configureStore({
  reducer: {
    auth: auth,
  },
  middleware: [thunk],
});
