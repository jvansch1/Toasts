import { RECEIVE_REQUEST, REMOVE_REQUEST } from '../actions/friendship_actions';
import merge from 'lodash/merge'

const FriendshipReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REQUEST:
      return merge({}, state,  { [action.request.id]: action.request })
    case REMOVE_REQUEST:
      let dupedState = merge({}, state);
      delete dupedState[action.request.id]
      return dupedState;
    default:
      return state
  }
}

export default FriendshipReducer
