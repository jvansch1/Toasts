
export const createFriendRequest = (requester_id, requested_id) => {
  return $.ajax({
    type: 'POST',
    url: 'api/friendships',
    data: { requester_id, requested_id }
  })
}
