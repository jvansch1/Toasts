
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
      country: ""
    }
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBrewery(this.state).then(() => hashHistory.push('breweries'))
  }

  render() {
    return (
      <div>
        <HeaderContainer />

        <div className='form-container'>
          <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
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

              <input id='beer-form-button' type="submit" value="Add Brewery" />
            </form>
        </div>
      </div>
    );
  }
}
export default BreweryForm;
