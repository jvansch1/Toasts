import * as CheckinApiUtil from '../util/checkins_api_util';
import { receiveBeer } from './beer_actions'

export const RECEIVE_ALL_CHECKINS = "RECEIVE_ALL_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';

export const receiveAllCheckins = (checkins) => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
})

export const receiveCheckin = (checkin) => ({
  type: RECEIVE_CHECKIN,
  checkin
})

export const removeCheckin = (checkin) => ({
  type: REMOVE_CHECKIN,
  checkin
})

export const fetchCheckin = (id) => {
  return dispatch => {
    return CheckinApiUtil.fetchCheckin(id)
      .then(checkin => dispatch(receiveCheckin(checkin)))
  }
}

export const fetchSomeCheckins = (limit, offset) => {
  return dispatch => {
    return CheckinApiUtil.fetchSomeCheckins(limit, offset)
      .then(checkins => dispatch(receiveAllCheckins(checkins)))
  }
}

export const fetchUserCheckins = (userId) => {
  return dispatch => {
    return CheckinApiUtil.fetchUserCheckins(userId)
      .then(checkins => dispatch(receiveAllCheckins(checkins)))
  }
}

export const fetchCheckins = (limit, offset) => {
  return dispatch => {
    return CheckinApiUtil.fetchCheckins(limit, offset)
      .then(checkins => dispatch(receiveAllCheckins(checkins)));
  }
}

export const createCheckin = (checkin) => {
  return dispatch => {
    return CheckinApiUtil.createCheckin(checkin)
      .then(beer => dispatch(receiveBeer(beer)))
  }
}

export const updateCheckin = (checkin) => {
  return dispatch => {
    return CheckinApiUtil.updateCheckin(checkin)
      .then(checkin => dispatch(receiveCheckin(checkin)));
  }
}

export const deleteCheckin = (id) => {
  return dispatch => {
    return CheckinApiUtil.deleteCheckin(id)
      .then(checkin => dispatch(removeCheckin(checkin)))
  }
}
