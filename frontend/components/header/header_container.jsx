
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  if (state.session.currentUser) {
    let currentUser = state.session.currentUser;
    return {
      currentUser: state.session.currentUser
    };
  }
  else {
    return {};
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
