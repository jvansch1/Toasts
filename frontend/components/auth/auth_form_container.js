import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const action = (formType === "login") ? login : signup;

  return {
    action: (user) => dispatch(action(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
