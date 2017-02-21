import React from 'react';
import HeaderContainer from '../header/header_container';
import BreweryCheckinListItem from '../checkins/brewery_checkin_list_item'

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




  render() {
    if (this.props.brewery === undefined || this.props.brewery.checkins === undefined) return null;
    const ratingLength = `${this.averageRating() * 25}px`
      return (
        <div>
          <HeaderContainer />

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
              <li>Added on 07/03/2012</li>
            </ul>
          </section>

          <div id='brewery-checkin-list-wrapper'>
            {this.props.brewery.checkins.map(checkin => {
              return <BreweryCheckinListItem checkin={checkin} brewery={this.props.brewery}/>
            })
          }
          </div>

        </div>
      )
    }
}

export default BreweryShow;
