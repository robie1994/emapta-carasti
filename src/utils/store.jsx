import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './Slice';

export const store = configureStore({
  reducer: {
    user: imageReducer,
  },
});
