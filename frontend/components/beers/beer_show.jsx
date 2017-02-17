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
        <div id='beer-container-container'>
          <HeaderContainer />
          <div id='beer-container'>

            <div id="beer-background">
              <img id='beer-show-image' src={this.props.beer.image_url} />
              <span id='beer-show-name'>{this.props.beer.name}</span>
              <br />
              <span id='beer-show-name-brewery'>{this.props.beer.brewery.name}</span>

              <ul>
                <li>ABV - {this.props.beer.ABV}</li>
                <li>IBU - {this.props.beer.IBU}</li>
                <li>Date Added - {this.props.beer.created_at}</li>
                <li></li>
              </ul>

            </div>

          </div>

        </div>
    )
  }
}

export default BeerShow;
