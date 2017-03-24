import React from 'react';
import { hashHistory, Link } from 'react-router';

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
    if (this.props.formType !== newProps.formType) {
      this.props.clearErrors();
    }
    else {
      this.errors = newProps.errors
    }
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

  redirectToLanding(e) {
    e.preventDefault();
    hashHistory.push('/')
  }

  render() {
    const title = this.props.formType === "login" ? "Log In" : "Sign up";
    const redirect = this.props.formType === "login" ? <p>Not a member? <Link to='/signup'>Sign up!</Link></p> : <p>Already a member? <Link to='/login'>Sign In!</Link></p>
    return (
      <div id='auth-background'>
        <video autoPlay='true' loop>
          <source src='https://s3.amazonaws.com/untappd-dev/video.webm' type='video/webm'/>
          <source src='https://s3.amazonaws.com/untappd-dev/343637909.mp4' type='video/mp4'/>
        </video>
        <section id='form-background'>
          <img onClick={this.redirectToLanding} src={window.images.logo} id="logo"/>
          <ul className='errors'>
            {this.renderErrors()}
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)} id='user-form'>
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
              <input className='text-input' type="password" onChange={this.update('password')}/>
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
            <span id='redirect'>
              {redirect}
            </span>
          </form>
        </section>
      </div>
    );
  }
}

export default AuthForm;
