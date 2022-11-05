import { initialState } from './initial-state.contacts';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
//   state.isLoading = false;
//   state.error = null;
//   state.items = state.items.filter(item => item.id !== action.payload);
// const initialState = {
//   contacts: [],
//   filter: '',
// };
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//     changeFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { addContacts, deleteContact, changeFilter } =
//   contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
