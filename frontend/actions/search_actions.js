import * as SearchApiUtil from '../util/search_api_util'

export const SEARCH = "SEARCH";

export const search = (results) => ({
  type: SEARCH,
  results
})

// export const fetchResults = () => {
//   return dispatch => {
//     return SearchApiUtil.fetchResults()
//       .then(results => dispatch(fetchResults(results)))
//   }
// }
