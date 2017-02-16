import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import HeaderContainer from '../header/header_container';

class BreweryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (
      <div>

        <HeaderContainer />
        <ul>
          {
            this.props.breweries.map((brewery,idx) => {
              return <BreweryIndexItem brewery={brewery} key={idx} />;
            })
          }
        </ul>
      </div>
    );
  }
}
export default BreweryIndex;
