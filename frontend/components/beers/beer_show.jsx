import React from 'react';
import HeaderContainer from '../header/header_container'
import CheckinListItem from '../checkins/checkin_list_item'
import { Link, hashHistory } from 'react-router';

class BeerShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      mounted: false
    }
  }

  countCheckins() {
    return this.props.beer.checkins.length
  }


  componentDidMount() {
    if (this.props.params) {
      this.props.fetchBeer(this.props.params.beerId)
    }
    this.setState({mounted: true})
  }

  componentWillUnmount() {
    if (this.state.mounted) {
      this.setState({mounted: false})
    }
  }

  componentWillReceiveProps(newProps) {
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

  renderDefault(url) {
    return (url === "default_beer_Image.png") ? "/assets/default_beer_Image-d8dd9df1ee45f3e09adcebba7e936cc54c9ad5cfc3981630a80143bb7f1b9ba4.png" : url
  }

  topBeerList() {
    return (
      <div id='beer-list-container' className='beer-beer-list-container'>
        <span id='beer-show-top-beers-header'>
          Top Beers
        </span>
      <ul id='beer-show-top-beer-list'>
        {
          window.top_beers.top_beers.map((beerArray,idx) => {
            return (
                <li className='top-beer-index-item' key={idx}>
                  <img className='top-beer-image' src={this.renderDefault(beerArray[1])} />
                  <ul>
                    <Link to={`beers/${beerArray[0].id}`}>
                    <li id='top-beer-beer-name'>
                      {beerArray[0].name}
                    </li>
                  </Link>
                  <Link to={`breweries/${beerArray[2].id}`}>
                    <li id='top-beer-brewery-name'>
                      {beerArray[2].name}
                    </li>
                  </Link>
                  </ul>
                </li>
            )
          })
        }
      </ul>
    </div>
    )
  }

  checkinList() {
    return (
      <div id='checkin-list-wrapper'>
        <ul className='checkin-list-container'>
          {
            this.props.beer.checkins.map((checkin, idx) => {
              return <CheckinListItem checkin={checkin} beer={this.props.beer} brewery={this.props.brewery} key={idx}/>
            })
          }
        </ul>
      </div>
    )
  }

  ratings() {
    const ratingLength = `${this.averageRating() * 25}px`
    return (
      <div className='brewery-show-star-ratings-css'>
        <div className='brewery-show-star-ratings-css-top' style={{width: ratingLength}} >
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className='brewery-show-star-ratings-css-bottom'>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    )
  }

  statList() {
    return (
      <ul className='stat-list'>
        <li>ABV - {this.props.beer.ABV}</li>
        <li>IBU - {this.props.beer.IBU}</li>
        <li>{this.props.beer.checkins.length} Ratings</li>
        <li>Date Added - {this.props.beer.created_at} ago</li>
      </ul>
    )
  }

  render() {
    if (this.props.beer === undefined || this.props.beer.checkins === undefined) return null;

      return (
        <div id='beer-container-container'>
          <HeaderContainer />
          <div id='beer-show-holder'>
            <div id='beer-show-left'>
              <div id='beer-container'>
                <div id="beer-background">
                  <div id='beer-header-flex'>
                    <img id='beer-show-image' src={this.props.beer.image_url} />
                    <div id='beer-name-flex'>
                      <span id='beer-show-name'>{this.props.beer.name}</span>
                      <Link to={`breweries/${this.props.beer.brewery_id}`}>
                        <span id='beer-show-name-brewery'>{this.props.beer.brewery.name}</span>
                      </Link>
                    </div>
                    <i onClick={this.openCheckin.bind(this)} className="fa fa-plus-square" aria-hidden="true"></i>
                  </div>
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
                  {this.ratings()}
                  {this.statList()}
                </div>
              </div>
              {this.checkinList()}
            </div>
            {this.topBeerList()}
          </div>
          {this.props.children}
        </div>
    )
  }
}

export default BeerShow;
