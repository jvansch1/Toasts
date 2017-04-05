import { connect } from 'react-redux';
import Home from './home';
import { logout, login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
      currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
