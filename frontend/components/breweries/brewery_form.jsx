
import React from 'react'
import HeaderContainer from '../header/header_container'
import { hashHistory } from 'react-router'

class BreweryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      city: "",
      state: "",
      country: "",
      imageUrl: '',
      imageFile: ''
    }
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("brewery[name]", this.state.name)
    formData.append("brewery[city]", this.state.city)
    formData.append("brewery[state]", this.state.state)
    formData.append("brewery[country]", this.state.country)
    formData.append("brewery[image]", this.state.imageFile)
    this.props.createBrewery(formData).then((brewery) => {
      $('.success-popup').attr("hidden", false)
      const hideDiv = function() {
        $('.success-popup').attr("hidden", true)
        hashHistory.push(`breweries/${brewery.brewery.id}`)
      }
      setTimeout(hideDiv, 750)
      return null;
    });
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

  beerForm() {
    return (
      <div className='form-container'>
        <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='success-popup' hidden='true'>Successfully created Brewery!</div>
          <span id='beer-form-title'>
            Add A Brewery
          </span>
          <br />
            <p>
              Name
            </p>
            <input className='beer-input' onChange={this.update('name')}type="text"/>
            <p>
              City
            </p>
            <input className='beer-input' onChange={this.update('city')}type="text" />
            <p>
              State
            </p>
            <input className='beer-input' onChange={this.update('state')} type='text'/>
            <p>
              Country
            </p>
            <input className='beer-input' onChange={this.update('country')} type='text' />
            <p>
              Upload Picture
            </p>
            <div id='beer-image-field'>
              <input type='file' id='brewery-picture-input' onChange={this.addFile.bind(this)}/>
              <img src={this.state.imageUrl} id='pending-beer-image'/>
            </div>
            <input id='beer-form-button' type="submit" value="Add Brewery" />
          </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.beerForm()}
      </div>
    );
  }
}
export default BreweryForm;
