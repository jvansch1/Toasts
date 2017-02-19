import { connect } from 'react-redux';
import CheckinShow from './checkin_show'
import { fetchCheckin } from '../../actions/checkin_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    checkin: state.checkins[ownProps.params.checkinId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: (id) => dispatch(fetchCheckin(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinShow)
