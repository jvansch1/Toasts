import React from 'react';
import { hashHistory } from 'react-router';
import { search } from '../../actions/search_actions';



class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      fetching: false
    }
  }

  submitSearch(e) {
    e.preventDefault();
  }

  updateValue(e) {
    e.preventDefault();
    this.setState({fetching: true})
    this.setState({value: e.target.value, fetching: true}, () => this.props.fetchResults(this.state.value).then(results => this.setState({fetching: false})))
  }

  redirect(id) {
  return e => {
    this.setState({value: ''}, () => this.props.fetchResults(this.state.value))
    this.props.deleteResults()
    hashHistory.push(`beers/${id}`)
  }
}


  renderDropdown() {
      if(this.state.value.length > 0 && this.props.search.length > 0) {
      return(
        <ul id='dropdown'>
          {
            this.props.search.map(searchResult => {
              return (
                <li id='search-result' onClick={this.redirect(searchResult.id)} key={searchResult.id}>
                  <img id='result-img' src={searchResult.image_url} />
                  <div id='result-beer-and-brewery'>
                    <h3>{searchResult.name}</h3>
                    <h4 className='search-brewery'>{searchResult.brewery_name}</h4>
                  </div>
                </li>
              )
            })
          }
        </ul>
      )
    }
    else if (this.state.value.length !== 0 && this.props.search.length === 0 && this.state.fetching === false) {
      return (
      <ul id='dropdown'>
        <li id='no-search-result'>
          <div id='result-beer-and-brewery'>
            <h3>No Results</h3>
          </div>
        </li>
      </ul>
      )
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch.bind(this)}>
          <input id='search-bar' autoComplete='off' onChange={this.updateValue.bind(this)} type='text' placeholder='Search'/>
          <input type='submit' hidden/>
        </form>
        {this.renderDropdown()}
      </div>
    )
  }
}

export default SearchBar;
