import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './state';

export const store = configureStore({
  reducer 
})