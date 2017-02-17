import * as CheckinApiUtil from '../util/checkins_api_util';


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
      .then(checkin => dispatch(receiveCheckin(id)))
  }
}

export const fetchCheckins = () => {
  return dispatch => {
    return CheckinApiUtil.fetchCheckins()
      .then(checkins => dispatch(receiveAllCheckins()));
  }
}

export const createCheckin = (checkin) => {
  return dispatch => {
    return CheckinApiUtil.createCheckin(checkin)
      .then(checkin => dispatch(receiveCheckin(checkin)))
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
