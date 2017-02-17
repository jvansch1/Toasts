 import React from 'react';

 const CheckinListItem = (props) => {
   return (
     <div>
       <li className='checkin-list-item'>
         <img src={props.checkin.user.image_url} />

         <section>
           <span>{props.checkin.user.username}</span> is drinking a <span>{props.beer.name}</span> by <span>{props.beer.brewery.name}</span>
         </section>
       </li>

       <ul className='date-list'>
         <li>{props.checkin.created_at}</li>
         <li>View Detailed Check-in</li>
       </ul>
     </div>


   )
 }

 export default CheckinListItem;
