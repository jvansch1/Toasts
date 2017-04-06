import React from 'react';
import HeaderContainer from '../header/header_container';
import BreweryCheckinListItem from '../checkins/brewery_checkin_list_item'
import { Link } from 'react-router'

class BreweryShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    this.state = this.props.fetchBrewery(this.props.params.breweryId)
  }

  componentWillReceiveProps(newProps) {
    this.state = newProps.brewery
  }

  averageRating() {
    let sum = 0;
    this.props.brewery.checkins.forEach(checkin => {
      sum += checkin.rating;
    })
    let average = sum / this.props.brewery.checkins.length;
    return average
  }

  renderDefault(url) {
    if (url === "default_beer_Image.png") {
      return "/assets/default_beer_Image-d8dd9df1ee45f3e09adcebba7e936cc54c9ad5cfc3981630a80143bb7f1b9ba4.png"
    }
    return url
  }

  render() {
    if (this.props.brewery === undefined || this.props.brewery.checkins === undefined) return null;
    const ratingLength = `${this.averageRating() * 25}px`
      return (
        <div>
          <HeaderContainer />
          <div id='brewery-page-container'>


            <div id='brewery-show-left'>
              <section className='breweryShow'>
                <div id='brewery-name-flex'>
                  <img className='brewery-image' src={this.props.brewery.image_url} />
                  <span className='brewery-show-name'>

                    {this.props.brewery.name}

                  </span>
                  <span className='brewery-show-location'>

                    {this.props.brewery.city}, {this.props.brewery.state}
                  </span>
                </div>

                <div className='beer-show-star-ratings-css'>

                  <div className='beer-show-star-ratings-css-top' style={{width: ratingLength}} >
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className='beer-show-star-ratings-css-bottom'>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>


                <div className='brewery-checkin-stats'>
                  <span className='checkin-count'>
                    <p className='first'>
                      Checkins: {this.props.brewery.checkins.length}
                    </p>
                    <p className='second'>
                      &nbsp;Unique: {this.props.brewery.unique_checkins}
                    </p>
                  </span>
                </div>



                <ul id='brewery-stats'>
                  <li>{this.props.brewery.checkins.length} Ratings</li>
                  <li>{this.props.brewery.beers} beers</li>
                  <li>Date Added - {this.props.brewery.created_at} ago</li>
                </ul>
              </section>

              <div id='brewery-checkin-list-wrapper'>
                {this.props.brewery.checkins.map(checkin => {
                  return <BreweryCheckinListItem checkin={checkin} brewery={this.props.brewery}/>
                })
              }
            </div>
          </div>
          <div id='brewery-show-right'>
            <h1 id='brewery-beer-header'>Beers by {this.props.brewery.name}</h1>
            <ul>
              {
                this.props.brewery.top_beers.map(beerArray => {
                return (
                    <li id='brewery-show-top-beer-item'>
                      <img id='brewery-show-top-beer-image' src={this.renderDefault(beerArray[1])} />
                      <ul id='brewery-show-top-beer-info'>
                        <Link to={`beers/${beerArray[0].id}`}>
                          <li id='top-name'>
                            {beerArray[0].name}
                          </li>
                        </Link>
                        <Link to={`breweries/${this.props.brewery.id}`}>
                          <li id='top-brewery-name'>
                            {this.props.brewery.name}
                          </li>
                        </Link>
                      </ul>
                    </li>
                  )
              })
            }
            </ul>
          </div>

        </div>

          </div>
      )
    }
}

export default BreweryShow;
