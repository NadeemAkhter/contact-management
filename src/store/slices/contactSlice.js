import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;

      const existingContact = state.find((contact) => contact.id === id);
      if (existingContact) {
        Object.assign(existingContact, updatedContact);
      }
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      const contactIndex = state.findIndex(
        (contact) => contact.id === contactId
      );

      if (contactIndex !== -1) {
        state.splice(contactIndex, 1);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;

export const listContacts = (state) => state.contacts;

export default contactSlice.reducer;
