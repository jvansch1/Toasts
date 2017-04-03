
export const createFriendRequest = (requester_id, requested_id, accepted = false) => {
  return $.ajax({
    type: 'POST',
    url: 'api/friendships',
    data: { friendship: { requester_id, requested_id, accepted } }
  })
}

export const fetchFriendRequest = (requester_id, requested_id, accepted = false) => {
  return $.ajax({
    type: 'GET',
    url: 'api/friendships/find',
    data: { friendship: { requester_id, requested_id, accepted } },
    dataType: 'json'
  })
}
