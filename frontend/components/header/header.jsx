import React from 'react';
import { Link, hashHistory } from 'react-router';
import SearchBarContainer from '../search/search_bar_container'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
      queryString: ''
    }
  }

  shouldComponentUpdate() {
    if (!store.getState().session.currentUser) {
      return false;
    }
    return true;
  }


  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(function() {
      hashHistory.push('/');
    })

  }


  render() {
    if (!window.store.getState().session.currentUser) return null;
    console.log(this.props)
    return (
      <div className="navbar clearfix">
        <ul className='navbar-link'>
          <li><Link to='/home'><img src={window.images.logoWhite} id="navbar-logo"/></Link></li>
          <li className='link'><Link to='/newBeer/'>Create Beer</Link></li>
          <li className='link'><Link to="/newBrewery">Create Brewery</Link></li>
          <li className='link'><SearchBarContainer /><i className="fa fa-search" aria-hidden="true"></i></li>
        </ul>
        <ul className='username'>
          <li id='profile-link'>
            <Link to={`users/${this.props.currentUser.id}`}>Profile</Link>
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
