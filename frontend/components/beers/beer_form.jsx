import React from 'react';
import HeaderContainer from '../header/header_container';

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
    this.props.createBeer(this.state);
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    };
  }

  // updateABV(e) {
  //   debugger
  //   let number = e.target.value;
  //   let ABV = parseFloat(number.match(/[\d\.]+/))
  //   this.setState({ABV});
  // }

  render() {
    return (
      <div>
        <HeaderContainer />
        <form onSubmit={this.handleSubmit.bind(this)}>
          Beer Name
          <input onChange={this.update('name')}type="text" />
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
          <input onChange={this.update('brewery_id')}type="text" />

          ABV
          <input onChange={this.update('ABV')} type='text'/>
          IBU
          <input onChange={this.update('IBU')} type='number'/>
          <input type="submit" value="Add Beer" />
    </form>


      </div>
    );
  }
}

export default BeerForm;
