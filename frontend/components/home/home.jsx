import React from 'react';
import {hashHistory, Link} from 'react-router';

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
        <div className="navbar">
          <ul className='navbar-link'>
            <li><img src={window.images.logoWhite} id="navbar-logo"/></li>
            <li>Create Beer</li>
            <li>Create Brewery</li>
          </ul>
        </div>
        {this.displayName()}
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default Home;
