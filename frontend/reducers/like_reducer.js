import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge'

const LikesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like })
    default:
      return state;
  }
}

export default LikesReducer;
