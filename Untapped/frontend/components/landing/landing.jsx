import React from 'react';
import AuthForm from '../auth/auth_form';
import { Link } from 'react-router';




const Landing = (props) => {

  const renderErrors = () => {
    if (props.errors) {
      props.errors.map((error,i) => {
        return <li>{error}</li>;
      });
    }
  };



  return (
    <div>
    <h1>Landing Page</h1>
        {renderErrors()}
        {props.children}
        <Link to='login'>Login</Link><br />
        <Link to='signup'>Sign Up</Link>
    </div>
  );

};

export default Landing;
