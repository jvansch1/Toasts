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

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    hashHistory.push('/home');
  }

  render() {
    const title = this.props.formType === "login" ? "Log In" : "Sign up";
    return (
      <div>
        <h1>{title}</h1>
          <form onSubmit={this.handleSubmit}>
            Username
            <input type="text" onChange={this.update('username')}/>
              <br />
            email
            <input type="text" onChange={this.update('email')}/>
              <br />
            password
            <input type="text" onChange={this.update('password')}/>
              <br />
            <input type="submit" value={title} />
          </form>
      </div>
    );
  }
}

export default AuthForm;
