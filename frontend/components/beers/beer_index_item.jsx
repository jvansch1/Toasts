import React from 'react';

const BeerIndexItem = (props) => {
  return (
    <li className='beer-index-item'>
      <span className='beername'>{props.beer.name}</span>
        <br />
      {props.beer.brewery_id}
        <br />
      {props.beer.style}
        <ul className='beer-index-list'>
          <li className='beer-index-list-item'>
            ABV - {props.beer.ABV}
          </li>
          <li className='beer-index-list-item'>
            IBU - {props.beer.IBU}
          </li>
          <li className='beer-index-list-item'>
            Date Added - {props.beer.created_at}
          </li>
        </ul>
    </li>
  );
};

export default BeerIndexItem;
