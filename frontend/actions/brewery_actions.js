import * as BreweryApiUtil from '../util/brewery_api_util';



export const RECEIVE_ALL_BREWERIES = "RECEIVE_ALL_BREWERIES";
export const RECEIVE_BREWERY = "RECEIVE_BREWERY"
export const REMOVE_BREWERY = "REMOVE_BREWERY";

export const receiveAllBreweries = (breweries) => ({
  type: RECEIVE_ALL_BREWERIES,
  breweries
})

export const receiveBrewery = (brewery) => ({
  type: RECEIVE_BREWERY,
  brewery
})

export const removeBrewery = (brewery) => ({
  type: REMOVE_BREWERY,
  brewery
})

export const fetchBreweries = () => {
  return dispatch => {
    return BreweryApiUtil.fetchBreweries()
      .then(breweries => dispatch(receiveAllBreweries(breweries)))
  }
}

export const fetchBrewery = (id) => {
  return dispatch => {
    return BreweryApiUtil.fetchBrewery(id)
      .then(brewery => dispatch(receiveBrewery(brewery)))
  }
}

export const createBrewery = (brewery) => {
  return dispatch => {
    return BreweryApiUtil.createBrewery(brewery)
      .then(brewery => dispatch(receiveBrewery(brewery)))
  }
}
