 import React from 'react';
 import { Link } from 'react-router';
 import { createLike, deleteLike} from '../../actions/like_actions'



 const CheckinListItem = (props) => {

   if (!props.checkin.user) return null;
   const rating = `${25 * props.checkin.rating}px`
   return (
     <div id='checkin-list-item-container'>

         <li className='checkin-list-item'>
           <Link to={`users/${props.checkin.user.id}`}><img src={props.checkin.user.image_url} /></Link>

           <section>
             <Link to={`users/${props.checkin.user.id}`}><span>{props.checkin.user.username}</span></Link> is drinking a <Link to={`beers/${props.beer.id}`}><span>{props.beer.name}</span></Link> by <span><Link to={`breweries/${props.beer.brewery.id}`} id='brewery-link'>{props.beer.brewery.name}</Link></span>
           </section>
         </li>

         <ul className='rating-list'>
           <ul className='inner-rating-list' >
             <li>
               <span className='rating-header'>
                 Rating: {props.checkin.rating} / 5
                 <div className='star-ratings-css'>

                   <div className='star-ratings-css-top' style={{width: rating}} >
                     <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                   </div>

                   <div className='star-ratings-css-bottom'>
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
           <li>{props.checkin.created_at} ago</li>
           <li><Link to={`checkins/${props.checkin.id}`}>View Detailed Check-in</Link></li>
         </ul>
     </div>


   )
 }

 export default CheckinListItem;
