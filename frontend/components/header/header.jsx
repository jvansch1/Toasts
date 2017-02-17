import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    hashHistory.push('/');
  }

  render() {
    return (
      <div className="navbar clearfix">
        <ul className='navbar-link'>
          <li><Link to='/home'><img src={window.images.logoWhite} id="navbar-logo"/></Link></li>
          <li className='link'><Link to='/newBeer/'>Create Beer</Link></li>
          <li className='link'><Link to="/newBrewery">Create Brewery</Link></li>
          <li className='link'><Link to="/home">Beers</Link></li>
          <li className='link'><Link to="/breweries">Breweries</Link></li>
        </ul>
        <ul className='username'>
          <li>
            Hello, {this.props.currentUser.username}!
          </li>
          <li>
            <button id='logout-button' onClick={this.handleLogout.bind(this)}>Logout</button>
          </li>
        </ul>



      </div>
    )
  }
};


export default Header;
