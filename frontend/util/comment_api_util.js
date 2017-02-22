
export const createComment = (comment) => {
  return $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: { comment }
  })
}

export const fetchComments = (checkin_id) => {
  return $.ajax({
    type: 'GET',
    url: 'api/comments',
    data: { checkin_id }
  })
}
