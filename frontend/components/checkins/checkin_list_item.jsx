 import React from 'react';
 import { Link } from 'react-router';

 const CheckinListItem = (props) => {
   return (
     <div id='checkin-list-item-container'>

         <li className='checkin-list-item'>
           <img src={props.checkin.user.image_url} />

           <section>
             <span>{props.checkin.user.username}</span> is drinking a <span>{props.beer.name}</span> by <span><Link to={`breweries/${props.beer.brewery.id}`}>{props.beer.brewery.name}</Link></span>
           </section>
         </li>

         <ul className='rating-list'>
           <ul className='inner-rating-list'>
             <li>Rating: {props.checkin.rating} / 5</li>
             <li id='review'>{props.checkin.description}</li>
           </ul>
           <li>
             <img id='checkin-image' src={props.checkin.image_url} width='100px' height='100px'/>
           </li>
         </ul>


         <ul className='date-list'>
           <li>{props.checkin.created_at}</li>
           <li>View Detailed Check-in</li>
         </ul>
     </div>


   )
 }

 export default CheckinListItem;
