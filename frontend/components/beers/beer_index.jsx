import React from 'react';

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
        
      </ul>
    );
  }
}
