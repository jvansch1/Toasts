import { connect } from 'react-redux';
import Landing from './landing';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session
  };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
