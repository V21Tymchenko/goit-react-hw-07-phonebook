export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;
export const getContactsFilter = state => {
  return state.contacts.contacts.items.filter(contact =>
    contact.name.toLowerCase()?.includes(state?.contacts.filter.filter)
  );
};

//    return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
