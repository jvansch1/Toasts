import { connect } from 'react-redux';
import CheckinShow from './checkin_show'
import { fetchCheckin } from '../../actions/checkin_actions';
import { createLike, fetchLikes, deleteLike } from '../../actions/like_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    checkin: state.checkins[ownProps.params.checkinId],
    likes: state.likes,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheckin: (id) => dispatch(fetchCheckin(id)),
    createLike: (like) => dispatch(createLike(like)),
    fetchLikes: () => dispatch(fetchLikes()),
    deleteLike: (like) => dispatch(deleteLike(like))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinShow)
