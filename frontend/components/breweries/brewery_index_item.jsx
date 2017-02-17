import React from 'react';
import { Link } from 'react-router'

class BreweryIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li id="list-container">
        <img id='brewery-list-image' src={this.props.brewery.image_url} />
        <ul className='name-city'>
          <li id='name' className='brewery-index-name'>
            <Link to={`breweries/${this.props.brewery.id}`}>{this.props.brewery.name}</Link>
          </li>
          <li className='brewery-index-name'>
            {this.props.brewery.city}, {this.props.brewery.state}
          </li>
        </ul>
      </li>
    );
  }
}

export default BreweryIndexItem;
