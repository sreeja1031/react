/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
