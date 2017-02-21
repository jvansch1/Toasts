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

  componentDidMount() {
    this.props.fetchBeers()
  }

  submitSearch(e) {
    e.preventDefault();
    const filtered = this.props.beers.filter(beer => {
      return beer.name.toLowerCase().includes(this.state.value.toLowerCase());
    })
    store.dispatch(this.props.search(filtered))
    hashHistory.push('/results')
  }

  updateValue(e) {
    e.preventDefault();
    this.setState({value: e.target.value})
  }


  render() {
    return (
      <form onSubmit={this.submitSearch.bind(this)}>
        <input onChange={this.updateValue.bind(this)} type='text' placeholder='Search'/>
        <input type='submit' hidden/>
      </form>
    )
  }
}

export default SearchBar;
