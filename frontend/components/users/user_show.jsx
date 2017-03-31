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
  }

  render() {
    if (!this.props.user && this.props.checkins && this.props.query) return null;
    debugger
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
        </div>
        <div id='user-checkin-container'>
          <div id='user-checkin-list'>
            {this.props.checkins.map(checkin => {
              checkin.beer['brewery'] = checkin.brewery;
              return <CheckinListItem checkin={checkin} beer={checkin.beer} brewery={checkin.brewery}/>
            })}
          </div>
          <div id='top-user-beers'>
            <ul id='user-top-beer-list'>
              {
                this.props.query.map(beer => {
                  return (
                    <li className='user-show-top-beer'>
                      <img src={beer.image_url} />
                      <span id='user-show-beer-and-brewery'>
                        <h1>{beer.name}</h1>
                        <h1>{beer.brewery.name}</h1>
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
