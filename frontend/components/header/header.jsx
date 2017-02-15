

import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <div className="navbar clearfix">
    <ul className='navbar-link'>
      <li><Link to='/home'><img src={window.images.logoWhite} id="navbar-logo"/></Link></li>
      <li className='link'><Link to='/newBeer/'>Create Beer</Link></li>
      <li className='link'><Link to="/">Create Brewery</Link></li>
    </ul>
    <p className='username'>
      Hello, {props.currentUser.username}!
    </p>
  </div>
);

export default Header;
