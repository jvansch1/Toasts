
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
      imageFile: '',
      loaded: false
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

  renderNameCheck() {
    if (this.state.name.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderCityCheck() {
    if (this.state.city.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderStateCheck() {
    if (this.state.state.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  renderCountryCheck() {
    if (this.state.country.length > 0) {
      return (
        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
      )
    }
  }

  clickFile() {
    document.getElementById('brewery-picture-input').click();
  }

  breweryForm() {
    return (
      <div className='form-container'>
        <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='success-popup' hidden='true'>Successfully created Brewery!</div>
          <span id='beer-form-title'>Add A Brewery</span>
          <div className='beer-input-container'>
            <p>Name</p>
            <span className='input-check-container'>
              <input className='beer-input' onChange={this.update('name')} type="text" placeholder='Brewery Name'/>
              {this.renderNameCheck()}
            </span>
          </div>
          <div className='beer-input-container'>
            <p>City</p>
            <span className='input-check-container'>
              <input className='beer-input' onChange={this.update('city')}type="text" placeholder='City'/>
              {this.renderCityCheck()}
            </span>
          </div>
          <div className='beer-input-container'>
            <p>State</p>
            <span className='input-check-container'>
              <input className='beer-input' onChange={this.update('state')} type='text'placeholder='State'/>
              {this.renderStateCheck()}
            </span>
          </div>
          <div className='beer-input-container'>
            <p>Country</p>
            <span className='input-check-container'>
              <input className='beer-input' onChange={this.update('country')} type='text' placeholder='Country'/>
              {this.renderCountryCheck()}
            </span>
          </div>
          <div className='beer-input-container'>
            <p>Upload Picture</p>
            <div id='beer-image-field'>
              <i onClick={this.clickFile.bind(this)}className="fa fa-camera" aria-hidden="true" id='beer-form-pic-input'></i>
              <input type='file' id='brewery-picture-input' onChange={this.addFile.bind(this)}/>
              <img src={this.state.imageUrl} id='pending-beer-image'/>
            </div>
            <input id='beer-form-button' type="submit" value="Add Brewery" />
          </div>
          </form>
      </div>
    )
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        {this.breweryForm()}
      </div>
    );
  }
}
export default BreweryForm;
