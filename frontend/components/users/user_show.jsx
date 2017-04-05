import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../header/header_container';
import CheckinListItem from '../checkins/checkin_list_item';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.routeParams.userId);
    this.props.fetchUserCheckins(this.props.routeParams.userId);
    this.props.topUserBeers(this.props.routeParams.userId);
    this.props.fetchFriendRequest(window.store.getState().session.currentUser.id, this.props.routeParams.userId)
  }

  sendFriendRequest() {
    this.props.createFriendRequest(window.currentUser.id, this.props.routeParams.userId)
    this.props.fetchUser(this.props.routeParams.userId);
  }

  deleteFriendRequest() {
    this.props.deleteFriendRequest(window.currentUser.id, this.props.routeParams.userId);
    this.props.fetchUser(this.props.routeParams.userId);
  }

  renderFriendButton() {
    if (this.props.friendships && Object.keys(this.props.friendships).length === 0) {
      return <span id='friend-button' onClick={this.sendFriendRequest.bind(this)}>Add Friend</span>
    }
    else {
      return <span id='friend-button' onClick={this.deleteFriendRequest.bind(this)}>Delete Friend</span>
    }
  }

  render() {
    if (!this.props.user && this.props.checkins && this.props.query) return null;
    return (
      <div id='user-show-container'>
        <HeaderContainer />
        <div id='user-show-info'>
          <div id='user-show-flex-container'>
            <div id='username-and-pic'>
              <img id='user-profile-pic' src={this.props.user.image_url} />
              <h3 id='user-show-username'>{this.props.user.username}</h3>
            </div>
            <div id='friend-button-container'>

            </div>
            <ul id='user-show-stats'>
            <li className='user-show-stat-item'>
              <span>
                {this.props.user.checkins.length}
              </span>
              <span>
                Checkins
              </span>
            </li>
            <li className='user-show-stat-item'>
              <span>
                {this.props.user.unique_checkins}
              </span>
              <span>
                Unique
              </span>
            </li>

          </ul>
          </div>
        </div>
        <div id='user-checkin-container'>
          <div id='user-checkin-list'>
            {this.props.checkins.map(checkin => {
              checkin.beer['brewery'] = checkin.brewery;
              return <CheckinListItem checkin={checkin} beer={checkin.beer} brewery={checkin.brewery} key={checkin.id}/>
            })}
          </div>
          <div id='top-user-beers'>
            <div id='list-title'>
              {this.props.user.username}&#39;s favorites
            </div>
            <ul id='user-top-beer-list'>
              {
                this.props.query.map(beer => {
                  return (
                    <li className='user-show-top-beer' key={beer.id}>
                      <img src={beer.image_url} />
                      <span id='user-show-beer-and-brewery'>
                        <Link to={`beers/${beer.id}`}><h1>{beer.name}</h1></Link>
                        <Link to={`breweries/${beer.brewery.id}`} id='user-show-top-brewery'><h1>{beer.brewery.name}</h1></Link>
                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
