
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => {
  if (state.session.currentUser) {
    let currentUser = state.session.currentUser.username;
  }
  return {
    currentUser
  };
};

export default connect(mapStateToProps, null)(Header);
