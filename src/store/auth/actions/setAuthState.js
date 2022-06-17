export const ActionSetAuthState = (state, {status, userId}) => {
  state.isAuth = status;
  sessionStorage.setItem('isLoggedIn', status);
  sessionStorage.setItem('userId', userId)
};
