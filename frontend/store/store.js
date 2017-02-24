import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';
// import createLogger from 'redux-logger'


// will need to add preloade state later to keep track of user on window


const configureStore = (preloadedState = {}) => createStore(RootReducer, preloadedState, applyMiddleware(thunk, createLogger()));

export default configureStore;
