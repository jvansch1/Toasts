
export const topBeers = () => {
  debugger
  return $.ajax({
    type: 'GET',
    url: 'api/beers/top',
  })
}

export const topUserBeers = (userId) => {
  return $.ajax({
    type: 'GET',
    url: "api/beers/user_top",
    data: { user_id: userId }
  })
}
