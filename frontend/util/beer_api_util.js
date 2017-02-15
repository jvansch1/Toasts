
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


export const createBeer = (beer) => {
  return $.ajax({
    type: 'POST',
    url: 'api/beers',
    data: {beer}
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
