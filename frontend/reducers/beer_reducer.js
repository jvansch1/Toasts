import { RECEIVE_ALL_BEERS, RECEIVE_BEER, REMOVE_BEER } from '../actions/beer_actions';
import { RECEIVE_CHECKIN } from '../actions/checkin_actions';
import merge from 'lodash/merge';

const BeerReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_BEER:
      return merge({}, state, { [action.beer.id]: action.beer });
    case REMOVE_BEER:
      let dupedState = merge({}, state);
      delete dupedState[action.beer.id];
      return dupedState;
    case RECEIVE_CHECKIN:
      let newState = merge({}, state)
      if (newState[action.checkin] && !newState[action.checkin.beer_id].checkins.includes(action.checkin)) {
        newState[action.checkin.beer_id].checkins.push(action.checkin)
      }
      debugger
      return newState
    default:
      return state;
  }
};

export default BeerReducer;
