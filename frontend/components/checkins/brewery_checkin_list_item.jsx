import React from 'react';
import { Link } from 'react-router';




const BreweryCheckinListItem = (props) => {
  const ratingLength = `${props.checkin.rating * 25}px`

  return (
    <div id='brewery-checkin-list-item-container'>

        <li className='checkin-list-item'>
          <Link to={`users/${props.checkin.user.id}`}><img src={props.checkin.user.image_url} /></Link>

          <section>
            <Link to={`users/${props.checkin.user.id}`}><span>{props.checkin.user.username}</span></Link> is drinking a <span><Link to={`beers/${props.checkin.beer.id}`}>{props.checkin.beer.name}</Link></span> by <span><Link to={`breweries/${props.brewery.id}`}>{props.brewery.name}</Link></span>
          </section>
        </li>


        <ul className='rating-list'>
          <ul className='inner-rating-list'>
            <li>
              <span className='rating-header-brewery'>
                Rating: {props.checkin.rating} / 5
                <div className='brewery-index-item-star-ratings-css'>

                  <div className='brewery-index-item-star-ratings-css-top' style={{width: ratingLength}} >
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className='brewery-index-item-star-ratings-css-bottom'>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <div id='review'>{props.checkin.description}</div>

              </span>

            </li>
            <li>
              <div id='thing'>
                <img id='checkin-image' src={props.checkin.image_url}/>
              </div>
            </li>
          </ul>
        </ul>


        <ul className='date-list'>
          <li>{props.checkin.created_at}</li>
          <li><Link to={`checkins/${props.checkin.id}`}>
            View Detailed Check-in
          </Link>
          </li>

        </ul>
    </div>


  )
}

export default BreweryCheckinListItem;
