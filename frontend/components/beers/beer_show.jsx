import React from 'react';
import HeaderContainer from '../header/header_container'

class BeerShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    if (this.props.params) {
      this.props.fetchBeer(this.props.params.beerId)
    }
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.beer
  }

  render() {
    if (this.props.beer === undefined) return null;
      return (
        <div>
          <HeaderContainer />

          <div id="beer-container">
          </div>

        </div>
    )
  }
}

export default BeerShow;
