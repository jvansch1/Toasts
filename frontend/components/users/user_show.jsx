import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from '../header/header_container';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.routeParams.userId);
  }

  render() {
    return (
      <div id='user-show-container'>
        <HeaderContainer />
        <div id='user-show-info'></div>
      </div>
    )
  }
}

export default UserShow;
