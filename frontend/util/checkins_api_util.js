
export const fetchCheckin = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/checkins/${id}`
  })
}

export const fetchCheckins = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/checkins'
  })
}

export const createCheckin = (checkin) => {
  return $.ajax({
    type: 'POST',
    url: 'api/checkins',
    data: { checkin }
  })
}

export const updateCheckin = (checkin) => {
  return $.ajax({
    type: 'UPDATE',
    url: `api/checkins/${checkin.id}`,
    data: {checkin}
  })
}

export const deleteCheckin = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/checkins/${id}`
  })
}
