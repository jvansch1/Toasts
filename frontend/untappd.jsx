import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchBeers, createBeer } from './actions/beer_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }
  window.fetchBeers = fetchBeers;
  window.createBeer = createBeer;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
