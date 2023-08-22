export const selectContacts = state => state.contactList.contacts.items;
export const selectFilter = state => state.contactList.filter;
export const selectLoader = state => state.contactList.contacts.isLoading;

//user

export const selectUser = state => state.user.user;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectisRefresh = state => state.user.isRefresh;
