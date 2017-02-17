import { RECEIVE_ALL_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions'
import merge from 'lodash/merge'

const CheckinReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CHECKINS:
      return action.checkins
    case RECEIVE_CHECKIN:
      return merge({}, state, { [action.checkin.id]: action.checkin })
    case REMOVE_CHECKIN:
      let dupedState = merge({}, state)
      delete dupedState[action.checkin.id]
      return dupedState;
    default:
      return state;
  }
}

export default CheckinReducer;
