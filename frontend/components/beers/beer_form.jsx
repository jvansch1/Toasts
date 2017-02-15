import React from 'react';
import HeaderContainer from '../header/header_container';

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      style: "",
      brewery_id: null
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

          <input type="submit" value="Add Beer" />
    </form>


      </div>
    );
  }
}

export default BeerForm;
