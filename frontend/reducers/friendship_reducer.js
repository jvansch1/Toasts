import RECEIVE_REQUEST from '../actions/friendship_actions';
import merge from 'lodash/merge'

const FriendshipReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_REQUEST:
      return ({}, state,  { [action.request.id]: action.request })
    default:
      return state
  }
}

export default FriendshipReducer
