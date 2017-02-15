import React from 'react';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBeers();
  }

  render() {
    return (
      <ul>
        {
          this.props.beers.map((beer,idx) => {
            return <BeerIndexItem beer={beer} key={idx} />;
        })
        }
      </ul>
    );
  }
}

export default BeerIndex;
