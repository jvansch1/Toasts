import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchBeers, createBeer } from './actions/beer_actions';
import { fetchBreweries, createBrewery } from './actions/brewery_actions';
import { receiveErrors } from './actions/session_actions';
import { fetchResults } from './actions/search_actions'
import { topBeers } from './actions/query_actions';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
