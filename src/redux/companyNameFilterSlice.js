import { createSlice } from '@reduxjs/toolkit';

export const companyNameFilterSlice = createSlice({
  name: 'companyNameFilter',
  initialState: '',
  reducers: {
    setCompanyNameFilter: (state, action) => action.payload,
  },
});

export const { setCompanyNameFilter } = companyNameFilterSlice.actions;
export default companyNameFilterSlice.reducer;
