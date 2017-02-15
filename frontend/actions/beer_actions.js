import * as BeerApiUtil from '../util/beer_api_util';

export const RECEIVE_ALL_BEERS = "RECEIVE_ALL_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const REMOVE_BEER = "REMOVE_BEER";

export const receiveAllBeers = (beers) => ({
  type: RECEIVE_ALL_BEERS,
  beers
});

export const receiveBeer = (beer) => ({
  type: RECEIVE_BEER,
  beer
});

export const removeBeer = (beer) => ({
  type: RECEIVE_BEER,
  beer
});

export const fetchBeers = () => {
  return dispatch => {
    return BeerApiUtil.fetchBeers()
      .then(beers => dispatch(receiveAllBeers(beers)));
  };
};

export const fetchBeer = (id) => {
  return dispatch => {
    return BeerApiUtil.fetchBeer(id)
      .then(beer => dispatch(receiveBeer(beer)));
  };
};

export const createBeer = (beer) => {
  return dispatch => {
    return BeerApiUtil.createBeer(beer)
      .then(beer => dispatch(receiveBeer(beer)));
  };
};

export const updateBeer = (beer) => {
  return dispatch => {
    return BeerApiUtil.updateBeer(beer)
      .then(beer => dispatch(receiveBeer(beer)));
  };
};

export const deleteBeer = (beer) => {
  return dispatch => {
    return BeerApiUtil.deleteBeer(beer)
      .then(beer => dispatch(removeBeer(beer)));
  };
};
