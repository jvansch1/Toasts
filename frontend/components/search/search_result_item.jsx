import React from 'react';


const SearchResultItem = (props) => {
  return (
    <li className='search-result-item'>
      <h2 className='beer-search-title'>
        {props.result.name}
      </h2>
      <h4 className='beer-search-brewery-name'>
        {props.result.brewery.name}
      </h4>
      <h4 className='beer-search-style'>
        {props.result.style}
      </h4>
    </li>
  )
}

export default SearchResultItem;
