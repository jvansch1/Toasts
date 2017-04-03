import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchBeer } from '../../actions/beer_actions';
import { topUserBeers } from '../../actions/query_actions';
import { createFriendRequest, fetchFriendRequest } from '../../actions/friendship_actions'
import { fetchUserCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
  if (!state.query) return null;
    return {
      user: state.user[ownProps.params.userId],
      checkins: Object.keys(state.checkins).map(key => state.checkins[key]),
      query: Object.keys(state.query).map(key => state.query[key])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserCheckins: (userId) => dispatch(fetchUserCheckins(userId)),
    topUserBeers: (userId) => dispatch(topUserBeers(userId)),
    fetchBeer: (id) => dispatch(fetchBeer(id)),
    createFriendRequest: (requesterId, requestedId) => dispatch(createFriendRequest(requesterId, requestedId)),
    fetchFriendRequest: (requesterId, requestedId) => dispatch(fetchFriendRequest(requesterId, requestedId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
