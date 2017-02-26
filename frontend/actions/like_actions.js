import * as LikeApiUtil from '../util/like_api_util';
import { receiveCheckin } from './checkin_actions';


export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = "RECEIVE_LIKE"
export const REMOVE_LIKE = 'REMOVE_LIKE'

export const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes
})

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like
})

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
})

export const fetchLikes = () => {
  return dispatch => {
    return LikeApiUtil.fetchLikes()
      .then(likes => dispatch(receiveAllLikes(likes)))
  }
}

export const createLike = (like) => {
  return dispatch => {
    return LikeApiUtil.createLike(like)
      .then(checkin => dispatch(receiveCheckin(checkin)))
  }
}

export const deleteLike = (like) => {
  return dispatch => {
    return LikeApiUtil.deleteLike(like)
      .then(checkin => dispatch(receiveCheckin(checkin)))
  }
}
