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
      <img src={window.images.logo} id="landing-logo"/>
      <section id="login-box">
        <button id='signup-button'><Link to='signup' id="signup-link">Sign Up</Link></button>
          <p id='login-link'>Already a member? <Link to='login'>Sign in!</Link></p>
      </section>
        {renderErrors()}
        {props.children}
    </div>
  );

};

export default Landing;
