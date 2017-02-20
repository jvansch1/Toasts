
export const fetchBeers = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/beers'
  });
};

export const fetchBeer = (id) => {
  return $.ajax({
    type: 'GET',
    url: `api/beers/${id}`
  });
};


export const createBeer = (formData) => {
  return $.ajax({
    type: 'POST',
    url: 'api/beers',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updateBeer = (beer) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/beers/${beer.id}`,
    data: {beer}
  });
};

export const Beer = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/beers/${id}`
  });
};
