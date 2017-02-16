import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _default_state = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _default_state, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser} );
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;

  }
};

export default SessionReducer;
