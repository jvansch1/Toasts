import React from 'react';
import { Link } from 'react-router'

const BeerIndexItem = (props) => {
  return (
    <li className='beer-index-item'>
      <img src={props.beer.image_url} />
      <Link to={`beers/${props.beer.id}`}>
        <span className='beername'>{props.beer.name}</span>

      </Link>
        <br />
      <span className='breweryname'><Link to={`breweries/${props.beer.brewery.id}`}>{props.beer.brewery.name}</Link></span>
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
