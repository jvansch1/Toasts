import { TOP_BEERS } from '../actions/query_actions'

const QueryReducer = (state = {}, action) => {
  switch (action.type) {
    case TOP_BEERS:
    debugger
      return action.beers
    default:
      return state
  }
}

export default QueryReducer;
