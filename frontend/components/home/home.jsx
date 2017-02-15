import React from 'react';
import {hashHistory, Link} from 'react-router';
import HeaderContainer from '../header/header_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName() {
    if (this.props.currentUser) {
      return this.props.currentUser.username;
    }
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    hashHistory.push('/');
  }


  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default Home;
