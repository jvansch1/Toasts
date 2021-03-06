
export const fetchLikes = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/likes'
  })
}

export const findLike = (user_id, checkin_id) => {

}


export const createLike = (like) => {
  return $.ajax({
    type: 'POST',
    url: 'api/likes',
    data: { like }
  })
}

export const deleteLike = (like) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/likes/${like.id}`,
  })
}
