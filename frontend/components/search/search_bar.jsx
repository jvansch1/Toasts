import React from 'react';
import { hashHistory } from 'react-router';
import { search } from '../../actions/search_actions';



class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      returnedItems: []
    }
  }

  // componentDidMount() {
  //   this.props.fetchBeers()
  // }



  submitSearch(e) {
    e.preventDefault();
    // this.props.fetchResults(this.state.value)
  }

  updateValue(e) {
    e.preventDefault();
    this.setState({value: e.target.value}, () => this.props.fetchResults(this.state.value))

  }

  redirect(id) {
  return e => {
    this.setState({value: ''}, () => this.props.fetchResults(this.state.value))
    this.props.deleteResults()
    hashHistory.push(`beers/${id}`)
  }
}


  renderDropdown() {
    if (this.props.search) {
      return(
        <ul id='dropdown'>
          {
            this.props.search.map(searchResult => {
              return (
                <li id='search-result' onClick={this.redirect(searchResult.id)}>
                  <img id='result-img' src={searchResult.image_url} />
                  <div id='result-beer-and-brewery'>
                    <h3>{searchResult.name}</h3>
                    <h4>{searchResult.brewery_name}</h4>
                  </div>
                </li>
              )
            })
          }
        </ul>
      )
    }
  }




  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch.bind(this)}>
          <input id='search-bar' onChange={this.updateValue.bind(this)} type='text' placeholder='Search'/>
          <input type='submit' hidden/>
        </form>
        {this.renderDropdown()}
      </div>
    )
  }
}

export default SearchBar;
