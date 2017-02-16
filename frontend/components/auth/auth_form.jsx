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
    this.errors = props.errors
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillReceiveProps(newProps) {
    this.errors = newProps.errors
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

  renderErrors() {
    return this.errors.map((err, idx) => {
      return <li key={idx}>{err}</li>;
    })
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
              password
              <br />
            </span>
              <input className='text-input' type="text" onChange={this.update('password')}/>
              <br />
            <input id='submit-button' type="submit" value={title} />
          </form>
          <ul className='errors'>
            {this.renderErrors()}
          </ul>
        </section>
      </div>
    );
  }
}

export default AuthForm;
