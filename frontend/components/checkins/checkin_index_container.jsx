
import { connect } from 'react-redux'
import CheckinIndex from './checkin_index'
import { fetchCheckins, fetchSomeCheckins } from '../../actions/checkin_actions'
import { createLike, deleteLike } from '../../actions/like_actions'
import { createComment } from '../../actions/comment_actions'
import { topBeers } from '../../actions/query_actions'


const mapStateToProps = (state) => {
  return {
    checkins: Object.keys(state.checkins).map(key => state.checkins[key]).reverse(),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCheckins: (limit, offset) => dispatch(fetchCheckins(limit, offset)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
    fetchSomeCheckins: (limit, offset) => dispatch(fetchSomeCheckins(limit, offset)),
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex)
