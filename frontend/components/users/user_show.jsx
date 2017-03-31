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
  }

  render() {
    if (!this.props.user && this.props.checkins) return null;
    return (
      <div id='user-show-container'>

        <HeaderContainer />
        <div id='user-show-info'>
          <div id='user-show-flex-container'>
            <div id='username-and-pic'>
              <img id='user-profile-pic' src={this.props.user.image_url} />
              <h3 id='user-show-username'>{this.props.user.username}</h3>
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
          <div id='user-checkin-list'>
            {this.props.checkins.map(checkin => {
              checkin.beer['brewery'] = checkin.brewery;
              return <CheckinListItem checkin={checkin} beer={checkin.beer} brewery={checkin.brewery}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
