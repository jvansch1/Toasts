
export const topBeers = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/beers/top',
  })
}
