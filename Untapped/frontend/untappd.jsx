import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // window.store = store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.logout = logout;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
