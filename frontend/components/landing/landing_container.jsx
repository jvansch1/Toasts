import { connect } from 'react-redux';
import Landing from './landing';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
