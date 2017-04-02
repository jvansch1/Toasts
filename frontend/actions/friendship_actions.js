import * as friendshipApiUtil from '../util/friendship_api_util'

export const RECEIVE_REQUEST = "RECEIVE_REQUEST"

export const receiveRequest = (request) => {
  type: RECEIVE_REQUEST,
  request
}

export const createFriendRequest = (request) => {
  return dispatch => {
    return friendshipApiUtil.createFriendRequest(request.requester_id, request.requested_id)
      .then(request => dispatch(receiveRequest(request)))
  }
}
