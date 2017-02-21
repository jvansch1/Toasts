
export const fetchResults = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/search'
  })
}
