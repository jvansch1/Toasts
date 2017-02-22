import { connect } from 'react-redux';
import CommentIndex from './comment_index'
import { createComment } from '../../actions/comment_actions'
import { fetchCheckin } from '../../actions/checkin_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    checkin: ownProps.checkin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    fetchCheckin: (id) => dispatch(fetchCheckin(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
