import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';


// will need to add preloade state later to keep track of user on window


const configureStore = (preloadedState = {}) => createStore(RootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
