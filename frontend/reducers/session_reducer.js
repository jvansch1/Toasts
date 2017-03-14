import { CLEAR_ERRORS, RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _default_state = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _default_state, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _default_state, { currentUser: action.currentUser} );
    case RECEIVE_ERRORS:
      return merge({}, _default_state, {  errors: action.errors });
    case CLEAR_ERRORS:
      return merge({}, _default_state)
    default:
      return state;

  }
};

export default SessionReducer;
