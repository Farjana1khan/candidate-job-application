import { configureStore } from '@reduxjs/toolkit';
import companyNameFilterReducer from './companyNameFilterSlice';

 const store = configureStore({
  reducer: {
    companyNameFilter: companyNameFilterReducer,
  },
});

export default store;