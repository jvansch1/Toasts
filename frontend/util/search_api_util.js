
export const fetchResults = (query) => {
  return $.ajax({
    type: 'GET',
    url: 'api/beers/search',
    dataType: 'json',
    data: { query }
  })
}
