import { connect } from 'react-redux';
import CommentIndex from './comment_index'
import { createComment } from '../../actions/comment_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    checkin: ownProps.checkin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex)
