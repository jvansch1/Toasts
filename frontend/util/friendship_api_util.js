
export const createFriendRequest = (requester_id, requested_id, accepted = false) => {
  return $.ajax({
    type: 'POST',
    url: 'api/friendships',
    data: { friendship: { requester_id, requested_id, accepted } }
  })
}
