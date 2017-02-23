import * as QueryApiUtil from '../util/query_api_util'


export const TOP_BEERS = "TOP_BEERS";

export const topBeers = (beers) => ({
  type: TOP_BEERS,
  beers
})

export const receiveTopBeers = () => {
  return dispatch => {
    return QueryApiUtil.topBeers()
      .then(beers => dispatch(topBeers(beers)))
  }
}
