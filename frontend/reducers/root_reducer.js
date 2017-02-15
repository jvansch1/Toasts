import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';


export default combineReducers({
  session: SessionReducer,
  beers: BeerReducer
});
