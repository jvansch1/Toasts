 import React from 'react';
 import { Link } from 'react-router'

 class CheckinIndexItem extends React.Component {
   constructor(props) {
     super(props)
   }

   render() {
     const ratingLength = `${this.props.checkin.rating * 25}px`
     return (
       <li id='checkin-index-item'>
         <div id='user-info'>
           <div id='image-container'>
             <img className='checkin-index-user-image' src={this.props.checkin.user.image_url} />
           </div>

           <div id='checkin-content'>
             <p>
                 {this.props.checkin.user.username} is drinking a <Link to={`beers/${this.props.checkin.beer.id}`}>{this.props.checkin.beer.name}</Link> by <Link to={`breweries/${this.props.checkin.brewery.id}`}>{this.props.checkin.brewery.name}</Link>
             </p>
             <div id='r-and-d'>
               <p>{this.props.checkin.description}</p>
                <div className='checkin-index-star-ratings-css'>

                  <div className='checkin-index-star-ratings-css-top' style={{width: ratingLength}} >
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>

                  <div className='checkin-index-star-ratings-css-bottom'>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
             </div>
             <img id='checkin-index-checkin-image' src={this.props.checkin.image_url} />
             <div id='checkin-buttons'>
               <p>
                 <span>Comment</span>
               </p>
               <p>
                 <span>Toast</span>
               </p>
             </div>
             <div id='checkin-index-stats'>
               <span>
                 {this.props.checkin.created_at}
               </span>
               <span id='link'>
                 <Link to={`checkins/${this.props.checkin.id}`}>View Detailed Checkin</Link>
               </span>
             </div>
           </div>
           <img id='index-beer-image' src={this.props.checkin.beer_image_url} />
         </div>
       </li>
     )
   }
 }

export default CheckinIndexItem;
