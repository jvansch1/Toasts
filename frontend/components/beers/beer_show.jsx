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

  countCheckins() {
    return this.props.beer.checkins.length
  }


  componentDidMount() {
    debugger
    if (this.props.params) {
      this.props.fetchBeer(this.props.params.beerId)
    }
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (this.props.params.beerId !== newProps.params.beerId) {
      this.props.fetchBeer(newProps.params.beerId);
    }
  }

  averageRating() {
    let sum = 0
    this.props.beer.checkins.forEach(checkin => {
      sum += checkin.rating
    })
    const average = sum / this.props.beer.checkins.length
    return average
  }

  openCheckin(e) {
    e.preventDefault();
    hashHistory.push(`/beers/${this.props.beer.id}/checkin`)

  }

  render() {
    debugger
    if (this.props.beer === undefined || this.props.beer.checkins === undefined) return null;
    const ratingLength = `${this.averageRating() * 25}px`
      return (
        <div id='beer-container-container'>
          <HeaderContainer />
          <div id='beer-container'>

            <div id="beer-background">
              <img id='beer-show-image' src={this.props.beer.image_url} />
              <div id='beer-name-flex'>
                <span id='beer-show-name'>{this.props.beer.name}</span>
                <span id='beer-show-name-brewery'>{this.props.beer.brewery.name}</span>

              </div>


                <i onClick={this.openCheckin.bind(this)} className="fa fa-plus-square" aria-hidden="true"></i>


              <div className='checkin-count-container'>
                <span className='checkin-count'>
                  <p className='first'>
                    Checkins: {this.countCheckins()}
                  </p>
                  <p className='second'>
                    &nbsp;Unique: {this.props.beer.unique_checkins}
                  </p>
                </span>
              </div>

              <div className='brewery-show-star-ratings-css'>

               <div className='brewery-show-star-ratings-css-top' style={{width: ratingLength}} >
                 <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
               </div>

               <div className='brewery-show-star-ratings-css-bottom'>
                 <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
               </div>
              </div>

              <ul className='stat-list'>
                <li>ABV - {this.props.beer.ABV}</li>
                <li>IBU - {this.props.beer.IBU}</li>
                <li>{this.props.beer.checkins.length} Ratings</li>
                <li>Date Added - {this.props.beer.created_at}</li>
              </ul>
            </div>
          </div>
          <div id='checkin-list-wrapper'>
            <ul className='checkin-list-container'>
              {
                this.props.beer.checkins.map((checkin, idx) => {
                  return <CheckinListItem checkin={checkin} beer={this.props.beer} brewery={this.props.brewery} key={idx}/>
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
