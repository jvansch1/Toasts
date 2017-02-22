import {RECEIVE_SEARCH_RESULTS, EMPTY_RESULTS} from '../actions/search_actions'


const SearchReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results
    case EMPTY_RESULTS:
      return [];
    default:
      return state;
  }
}

export default SearchReducer;
