import React from 'react';
import AuthForm from '../auth/auth_form';
import { Link, hashHistory } from 'react-router';




class Landing extends React.Component {

  constructor(props) {
    super(props)
  }

  renderErrors() {
    if (this.props.errors) {
      this.props.errors.map((error,i) => {
        return <li>{error}</li>;
      });
    }
  };

  componentDidMount() {
    let video = document.getElementById('video');
    video.play();
  }

  logInGuest() {
    this.props.login({username: 'Guest', password: 'password'}).then(() => hashHistory.push('home'))
  }

  renderLoginContent() {
    return (
      <div id='login-content'>
        <span>
          <img src={window.images.logo} id="landing-logo"/>
        </span>
        <section id="login-box">
          <button id='signup-button'><Link to='signup' id="signup-link">Sign Up</Link></button>
          <button id='signup-button' onClick={this.logInGuest.bind(this)}><span id='signup-link'>Guest</span></button>
          <p id='login-link'>Already a member? <Link to='login'>Sign in!</Link></p>
        </section>
      </div>
    )
  }

  render() {
    return (
      <div id='landing-background'>
        <video id='video' autoPlay='true' playsInline>
          <source src='https://s3.amazonaws.com/untappd-dev/video.webm' type='video/webm'/>
          <source src='https://s3.amazonaws.com/untappd-dev/343637909.mp4' type='video/mp4'/>
        </video>
        {this.renderLoginContent()}
        <div id="transparent"></div>
        <ul>
          {this.renderErrors()}
        </ul>
        {this.props.children}
      </div>
    );
  }

};

export default Landing;
