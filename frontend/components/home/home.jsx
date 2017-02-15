import React from 'react';
import {hashHistory} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  displayName() {
    if (this.props.currentUser) {
      return (<h4>{this.props.currentUser.username}</h4>);
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
        <h1>Home Page!</h1>
        {this.displayName()}
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default Home;
