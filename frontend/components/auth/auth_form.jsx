import React from 'react';
import { hashHistory } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      imageFile: '',
      imageUrl: null,
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

  addFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username)
    formData.append("user[password]", this.state.password)
    formData.append("user[image]", this.state.imageFile)
    if (this.props.formType !== "login") {
      this.props.action(formData).then(() => hashHistory.push('/home'));
    }
    else {
      this.props.action(this.state).then(() => hashHistory.push('/home'));
    }
  }

  renderErrors() {
    return this.errors.map((err, idx) => {
      return <li key={idx}>{err}</li>;
    })
  }

  renderImgInput() {
    if (this.props.formType !== "login") {
      return <input type='file' onChange={this.addFile.bind(this)}/>
    }
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
              <ul className='img-input'>
                <span>
                  <div>
                    {this.renderImgInput()}
                  </div>
                </span>
                <img src={this.state.imageUrl} />
              </ul>
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
