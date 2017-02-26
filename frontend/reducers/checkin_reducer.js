import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions'
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import { RECEIVE_COMMENT } from '../actions/comment_actions'
import merge from 'lodash/merge'

const CheckinReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins
    case RECEIVE_CHECKIN:
      const otherState = merge({}, state, { [action.checkin.id]: action.checkin })
      otherState[action.checkin.id].likes = action.checkin.likes
      return otherState;
    case REMOVE_CHECKIN:
      let dupedState = merge({}, state)
      delete dupedState[action.checkin.id]
      return dupedState;
    case RECEIVE_COMMENT:
      let newState = merge({}, state)
      let checkin = newState[action.comment.checkin_id]
      checkin.comments.push(action.comment)
      return newState
    default:
      return state;
  }
}

export default CheckinReducer;
