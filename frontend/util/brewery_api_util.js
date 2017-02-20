
export const fetchBreweries = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/breweries'
  })
}

export const fetchBrewery = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/breweries/${id}`
  })
}

export const createBrewery = (formData) => {
  return $.ajax({
    type: 'POST',
    url: `api/breweries`,
    data: formData,
    contentType: false,
    processData: false
  })
}

export const updateBrewery = (brewery) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/breweries/${brewery.id}`,
    data: { brewery }
  })
}
export const destroy = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/breweries/${id}`,
  })
}
