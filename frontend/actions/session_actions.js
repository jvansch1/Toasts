import * as sessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS"
export const LOGOUT = "LOGOUT"



export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const Logout = () => ({
  type: LOGOUT
})


export const login = (user) => {
  return dispatch => {
    return sessionApiUtil.login(user)
      .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
};

// export const clearErrors = (arr = []) => {
//   return dispatch => {
//     return sessionApiUtil.logout()
//       .then(user => dispatch(receiveCurrentUser(null))),
//         err => dispatch(receiveErrors(arr))
//   }
// }

export const logout = () => {
  return dispatch => {
    return sessionApiUtil.logout()
      .then(user => dispatch(Logout()),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const signup = (user) => {
  return dispatch => {
    return sessionApiUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)));
  };
};
