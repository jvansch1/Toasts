import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BeerReducer from './beer_reducer';
import BreweryReducer from './brewery_reducer';
import CheckinReducer from './checkin_reducer';
import LikeReducer from './like_reducer';
import SearchReducer from './search_reducer';
import CommentReducer from './comment_reducer';
import QueryReducer from './query_reducer';
import UserReducer from './user_reducer';
import FriendshipReducer from './friendship_reducer';

export default combineReducers({
  session: SessionReducer,
  beers: BeerReducer,
  breweries: BreweryReducer,
  checkins: CheckinReducer,
  likes: LikeReducer,
  search: SearchReducer,
  comments: CommentReducer,
  query: QueryReducer,
  user: UserReducer,
  friendship: FriendshipReducer
});
