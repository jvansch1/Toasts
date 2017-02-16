import { RECEIVE_ALL_BREWERIES, RECEIVE_BREWERY, REMOVE_BREWERY } from '../actions/brewery_actions';
import merge from 'lodash/merge';

const BreweryReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_BREWERIES:
      return action.breweries
    case RECEIVE_BREWERY:
      return merge({}, state, { [action.brewery.id]: action.brewery })
    case REMOVE_BREWERY:
      let dupedState = merge({}, state)
      delete dupedState[action.brewery.id];
      return dupedState;
    default:
      return state
  }
}

export default BreweryReducer;
