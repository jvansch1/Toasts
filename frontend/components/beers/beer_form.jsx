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
          <form onSubmit={this.handleSubmit.bind(this)}>


              Beer Name
              <input onChange={this.update('name')}type="text" className='beer-form-input'/>

            <br />



            Style
            <select onChange={this.update('style')}>
              <option disabled selected>Pick a style</option>
              {
                window.styles.styles.map((style, idx) => {
                  return <option value={style} key={idx}>{style}</option>;
                  })
                }
              </select>



            Brewery
            <select onChange={this.update('brewery_id')}>
              <option disabled selected>Pick a Brewery</option>
              {
                this.props.breweries.map((brewery, idx) => {
                  return <option value={brewery.id} key={idx}>{brewery.name}</option>;
                })
              }
            </select>


            ABV
            <input onChange={this.update('ABV')} type='text'/>


            IBU
            <input onChange={this.update('IBU')} type='number'/>

              <input type="submit" value="Add Beer" />
            </form>
        </div>
      </div>
    );
  }
}

export default BeerForm;
