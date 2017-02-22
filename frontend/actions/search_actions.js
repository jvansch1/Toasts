import * as SearchApiUtil from '../util/search_api_util'

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const EMPTY_RESULTS = "EMPTY_RESULTS"
export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
})

export const emptyResults = () => ({
  type: EMPTY_RESULTS,
  results: []
})

export const fetchResults = (query) => {
  return dispatch => {
    return SearchApiUtil.fetchResults(query)
      .then(results => dispatch(receiveSearchResults(results)))
  }
}

export const deleteResults = (query = '') => {
  return dispatch => {
    return SearchApiUtil.fetchResults('')
      .then(results => dispatch(emptyResults()));
  }
}
