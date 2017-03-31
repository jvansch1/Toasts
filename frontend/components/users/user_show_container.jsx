import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user[ownProps.params.userId]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
