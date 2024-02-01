import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      //Will Implement add logic
    },
    editContact: (state, action) => {
      //Will Implement editing logic
    },
    deleteContact: (state, action) => {
      //Will Implement deletion logic
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export const listContacts = (state) => state.contacts;

export default contactSlice.reducer;