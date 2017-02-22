
import { connect } from 'react-redux'
import CheckinIndex from './checkin_index'
import { fetchCheckins } from '../../actions/checkin_actions'

const mapStateToProps = (state) => {
  debugger
  return {
    checkins: Object.keys(state.checkins).map(key => state.checkins[key])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: () => dispatch(fetchCheckins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex)
