
import { connect } from 'react-redux'
import CheckinIndex from './checkin_index'
import { fetchCheckins, fetchSomeCheckins } from '../../actions/checkin_actions'
import { createLike } from '../../actions/like_actions'

const mapStateToProps = (state) => {
  return {
    checkins: Object.keys(state.checkins).map(key => state.checkins[key])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: (limit, offset) => dispatch(fetchCheckins(limit, offset)),
    createLike: (like) => dispatch(createLike(like)),
    fetchSomeCheckins: (limit, offset) => dispatch(fetchSomeCheckins(limit, offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex)
