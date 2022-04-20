import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal/modalSlice';

export default configureStore({
  reducer: {
      modal: modalReducer
  },
})