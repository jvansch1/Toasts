import React from 'react';
import HeaderContainer from '../header/header_container';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.params.breweryId)
  }



  render() {
    return(
      <div>
        <HeaderContainer />
      </div>
    )
  }
}

export default BreweryShow;
