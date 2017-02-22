
export const createComment = (comment) => {
  return $.ajax({
    type: 'POST',
    url: 'api/comments',
    data: { comment }
  })
}
