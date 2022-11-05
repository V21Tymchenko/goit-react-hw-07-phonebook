import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
