import React from 'react';

class BreweryIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li id="list-container">
        <img id='brewery-list-image' src={this.props.brewery.image_url} />
        <ul className='name-city'>
          <li>
            {this.props.brewery.name}
          </li>
          <li>
            {this.props.brewery.city}, {this.props.brewery.state}
          </li>
        </ul>
      </li>
    );
  }
}

export default BreweryIndexItem;
