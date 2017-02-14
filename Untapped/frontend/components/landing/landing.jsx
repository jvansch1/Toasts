import React from 'react';
import AuthForm from '../auth/auth_form';
import { Link } from 'react-router';



const Landing = (props) => {
  return (
    <div>
    <h1>Landing Page</h1>
        {props.children}
        <Link to='login'>Login</Link><br />
        <Link to='signup'>Sign Up</Link>
    </div>
  );

};

export default Landing;
