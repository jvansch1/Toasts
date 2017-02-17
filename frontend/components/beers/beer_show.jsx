import React from 'react';
import HeaderContainer from '../header/header_container'
import CheckinListItem from '../checkins/checkin_list_item'
import { Link, hashHistory } from 'react-router';

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

  openCheckin(e) {
    e.preventDefault();
    hashHistory.push(`/beers/${this.props.beer.id}/checkin`)

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
            <button onClick={this.openCheckin.bind(this)} id='open-checkin-button'>Check In</button>
            </div>
          </div>
          <div id='checkin-list-wrapper'>
            <ul className='checkin-list-container'>
              {
                this.props.beer.checkins.map((checkin, idx) => {
                  return <CheckinListItem checkin={checkin} beer={this.props.beer} key={idx}/>
                })
              }
            </ul>
          </div>
          {this.props.children}
        </div>
    )
  }
}

export default BeerShow;
