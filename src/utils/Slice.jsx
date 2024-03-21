import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fname: 'Megan',
  lname: ' Smith',
  email: 'megan@info.com',
  image: '',
  bdate: '10/11/1991',
  phonenum: '+971 55 708 7909',
};

const imageSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateImage(state, action) {
      state.image = action.payload.image;
      state.fname = action.payload.fname;
      state.lname = action.payload.lname;
      state.email = action.payload.email;
      state.bdate = action.payload.bdate;
      state.phonenum = action.payload.phonenum;
    },
  },
});

export const { updateImage } = imageSlice.actions;

export default imageSlice.reducer;
