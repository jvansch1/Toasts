import { RECEIVE_ALL_BEERS, RECEIVE_BEER, REMOVE_BEER } from '../actions/beer_actions';
import merge from 'lodash/merge';

const BeerReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
    case RECEIVE_BEER:
    debugger
      return merge({}, state, { [action.beer.id]: action.beer });
    case REMOVE_BEER:
      let dupedState = merge({}, state);
      delete dupedState[action.beer.id];
      return dupedState;
    default:
      return state;
  }
};

export default BeerReducer;
