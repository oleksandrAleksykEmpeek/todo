import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import api from '../service/index';
export default configureStore({
  reducer: {
    auth: auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          otherValue: 42,
        },
      },
    }),
});
