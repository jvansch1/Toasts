import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchBeer } from '../../actions/beer_actions';
import { fetchUserCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user[ownProps.params.userId],
      checkins: Object.keys(state.checkins).map(key => state.checkins[key])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserCheckins: (userId) => dispatch(fetchUserCheckins(userId)),
    fetchBeer: (id) => dispatch(fetchBeer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
