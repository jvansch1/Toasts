
export const fetchLikes = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/likes'
  })
}


export const createLike = (like) => {
  return $.ajax({
    type: 'POST',
    url: 'api/likes',
    data: { like }
  })
}

export const deleteLike = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/likes/${id}`,
  })
}
