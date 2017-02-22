
import { connect } from 'react-redux'
import CheckinIndex from './checkin_index'
import { fetchCheckins } from '../../actions/checkin_actions'
import { createLike } from '../../actions/like_actions'

const mapStateToProps = (state) => {
  return {
    checkins: Object.keys(state.checkins).map(key => state.checkins[key])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: () => dispatch(fetchCheckins()),
    createLike: (like) => dispatch(createLike(like))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex)
