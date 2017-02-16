import React from 'react';

const BeerIndexItem = (props) => {
  return (
    <li className='beer-index-item'>
      <img src={props.beer.image_url} />
      <span className='beername'>{props.beer.name}</span>
        <br />
      <span className='breweryname'>{props.beer.brewery.name}</span>
        <br />
      <span className='stylename'>{props.beer.style}</span>
        <br />
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
