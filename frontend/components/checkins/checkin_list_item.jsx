 import React from 'react';

 const CheckinListItem = (props) => {
   return (
     <li>
       {props.checkin.user_id}
     </li>
   )
 }

 export default CheckinListItem;
