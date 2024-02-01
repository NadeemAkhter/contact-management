import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [
      {
          "name": "Test Name",
          "phone": "0123456789",
          "email": "test@gmail.com"
      }
  ],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
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
