import React from 'react';
import { hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => hashHistory.push('/home'));
  }

  render() {
    const title = this.props.formType === "login" ? "Log In" : "Sign up";
    return (
      <div id='auth-background'>
        <section id='form-background'>
          <img src={window.images.logo} id="logo"/>
          <form onSubmit={this.handleSubmit} id='user-form'>
            <span>
              Username
              <br />
            </span>
              <input className='text-input' type="text" onChange={this.update('username')}/>
            <br />

            <span>
              email
              <br />
            </span>
              <input className='text-input' type="text" onChange={this.update('email')}/>
              <br />

            <span>
              password
              <br />
            </span>
              <input className='text-input' type="text" onChange={this.update('password')}/>
              <br />
            <input id='submit-button' type="submit" value={title} />
          </form>
        </section>
      </div>
    );
  }
}

export default AuthForm;
