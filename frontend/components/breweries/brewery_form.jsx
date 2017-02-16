
import React from 'react'
import HeaderContainer from '../header/header_container'

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
    this.props.createBrewery(this.state)
  }

  render() {
    return (
      <div>
        <HeaderContainer />

        <div className='form-container'>
          <form onSubmit={this.handleSubmit.bind(this)}>


              Name
              <input onChange={this.update('name')}type="text" className='beer-form-input'/>

            <br />


            City
            <input onChange={this.update('city')}type="text" />


            State
            <input onChange={this.update('state')} type='text'/>


            Country
            <input onChange={this.update('country')} type='text' />

              <input type="submit" value="Add Brewery" />
            </form>
        </div>
      </div>
    );
  }
}
export default BreweryForm;
