import React from 'react';

class BreweryIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className='beer-index-item'>

        <span className='beername'>Brewery Name</span>
          <br />
        <span className='breweryname'>City</span>
          <br />
        <span className='stylename'>State</span>
          <br />
          <ul className='beer-index-list'>
            <li className='beer-index-list-item'>
              ABV
            </li>
            <li className='beer-index-list-item'>
              IBU
            </li>
            <li className='beer-index-list-item'>
              Date Added 
            </li>
          </ul>
      </li>
    );
  }
}

export default BreweryIndexItem;
