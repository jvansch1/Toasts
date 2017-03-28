import React from 'react'
import HeaderContainer from '../header/header_container';
import SearchResultItem from './search_result_item';

const searchResults = props => {
  return (
    <div>
      <div>
        <HeaderContainer />
      </div>
      <div className='result-container'>
        <ul>
          {
            props.results.map(result => {
              return <SearchResultItem result={result} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default searchResults;
