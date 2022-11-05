const { combineReducers } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./contactsSlice');
const { filtersReducer } = require('./filterSlice');

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
