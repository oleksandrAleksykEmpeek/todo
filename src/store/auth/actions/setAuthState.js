export const ActionSetAuthState = (state, payload) => {
  state.isAuth = payload;
  sessionStorage.setItem('isLoggedIn', payload);
};
