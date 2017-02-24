
import { connect } from 'react-redux'
import CheckinIndex from './checkin_index'
import { fetchCheckins, fetchSomeCheckins } from '../../actions/checkin_actions'
import { createLike } from '../../actions/like_actions'
import { topBeers } from '../../actions/query_actions'


const mapStateToProps = (state) => {
  debugger
  return {
    checkins: Object.keys(state.checkins).map(key => state.checkins[key]),
    currentUser: state.session.currentUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: (limit, offset) => dispatch(fetchCheckins(limit, offset)),
    createLike: (like) => dispatch(createLike(like)),
    fetchSomeCheckins: (limit, offset) => dispatch(fetchSomeCheckins(limit, offset)),
    topBeers: () => dispatch(topBeers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex)
