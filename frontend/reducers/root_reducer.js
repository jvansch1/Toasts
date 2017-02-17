import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';
import BreweryReducer from './brewery_reducer';
import CheckinReducer from './checkin_reducer';


export default combineReducers({
  session: SessionReducer,
  beers: BeerReducer,
  breweries: BreweryReducer,
  checkins: CheckinReducer
});
