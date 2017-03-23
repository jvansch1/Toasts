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
      <video autoPlay='true'>
        <source src='https://s3.amazonaws.com/untappd-dev/video.webm' type='video/webm'/>
        <source src='https://s3.amazonaws.com/untappd-dev/343637909.mp4' type='video/mp4'/>
      </video>
      <div id='login-content'>
        <span>
          <img src={window.images.logo} id="landing-logo"/>
        </span>
        <section id="login-box">
          <button id='signup-button'><Link to='signup' id="signup-link">Sign Up</Link></button>
          <button id='signup-button' onClick={logInGuest}><span id='signup-link'>Guest</span></button>
          <p id='login-link'>Already a member? <Link to='login'>Sign in!</Link></p>
        </section>
      </div>
      <div id="transparent"></div>
      <ul>
        {renderErrors()}
      </ul>
        {props.children}
    </div>
  );

};

export default Landing;
