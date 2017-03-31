
export const fetchCheckin = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/checkins/${id}`
  })
}

export const fetchCheckins = (limit, offset) => {
  return $.ajax({
    type: 'GET',
    url: 'api/checkins',
    data: { limit, offset }
  })
}

export const fetchUserCheckins = (userId) => {
  return $.ajax({
    type: 'GET',
    url: 'api/checkins',
    data: { userId: userId }
  })
}

// export const fetchSomeCheckins = (limit, offset) => {
//   $.ajax({
//     type: 'GET',
//     url: 'api/checkins',
//     data: { limit, offset }
//   })
// }

export const createCheckin = (formData) => {
  return $.ajax({
    type: 'POST',
    url: 'api/checkins',
    data: formData,
    contentType: false,
    processData: false
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
