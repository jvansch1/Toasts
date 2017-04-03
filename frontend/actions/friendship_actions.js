import * as friendshipApiUtil from '../util/friendship_api_util'

export const RECEIVE_REQUEST = "RECEIVE_REQUEST"

export const receiveRequest = (request) => ({
  type: RECEIVE_REQUEST,
  request
})

export const createFriendRequest = (requester_id, requested_id) => {
  return dispatch => {
    return friendshipApiUtil.createFriendRequest(requester_id, requested_id)
      .then(request => dispatch(receiveRequest(request)))
  }
}

export const fetchFriendRequest = (requester_id, requested_id) => {
  return dispatch => {
    return friendshipApiUtil.fetchFriendRequest(requester_id, requested_id)
      .then(request => dispatch(receiveRequest(request)))
  }
}
