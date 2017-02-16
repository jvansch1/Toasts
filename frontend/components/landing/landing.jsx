import React from 'react';
import AuthForm from '../auth/auth_form';
import { Link, hashHistory } from 'react-router';




const Landing = (props) => {

  const renderErrors = () => {
    if (props.errors) {
      props.errors.map((error,i) => {
        return <li>{error}</li>;
      });
    }
  };

  const logInGuest = (e) => {
    props.login({username: 'Guest', password: 'password'}).then(() => hashHistory.push('home'))
}


  return (
    <div id='landing-background'>
      <img src={window.images.logo} id="landing-logo"/>
      <section id="login-box">
        <button id='signup-button'><Link to='signup' id="signup-link">Sign Up</Link></button>
        <button id='signup-button' onClick={logInGuest}><span id='signup-link'>Guest</span></button>
          <p id='login-link'>Already a member? <Link to='login'>Sign in!</Link></p>
      </section>
        {renderErrors()}
        {props.children}
    </div>
  );

};

export default Landing;
