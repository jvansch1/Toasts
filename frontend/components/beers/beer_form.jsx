import React from 'react';
import HeaderContainer from '../header/header_container';
import { hashHistory } from 'react-router'

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      style: "",
      brewery_id: null,
      ABV: "",
      IBU: null
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBeer(this.state).then(() => hashHistory.push('/home'));
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (
      <div>
        <HeaderContainer />

        <div className='form-container'>
          <form id='beer-form' onSubmit={this.handleSubmit.bind(this)}>
            <span id='beer-form-title'>
              Add A Beer
            </span>
            <br />
              <p>
                Beer Name
              </p>
              <input className='beer-input' placeholder='Beer Name' onChange={this.update('name')}type="text"/>

            <p>
              Style
            </p>
            <select className='beer-input' onChange={this.update('style')}>
              <option disabled selected>Pick a style</option>
              {
                window.styles.styles.map((style, idx) => {
                  return <option value={style} key={idx}>{style}</option>;
                  })
                }
              </select>



            <p>
              Brewery
            </p>
            <select className='beer-input' onChange={this.update('brewery_id')}>
              <option disabled selected>Pick a Brewery</option>
              {
                this.props.breweries.map((brewery, idx) => {
                  return <option value={brewery.id} key={idx}>{brewery.name}</option>;
                })
              }
            </select>


            <p>
              ABV
            </p>
            <input className='beer-input' placeholder='ABV'onChange={this.update('ABV')} type='text'/>



            <p>
              IBU
            </p>
            <input className='beer-input' placeholder='IBU' onChange={this.update('IBU')} type='number'/>

              <input id='beer-form-button' type="submit" value="Add New Beer" />
            </form>
        </div>
      </div>
    );
  }
}

export default BeerForm;
