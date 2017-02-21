import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchBeers } from '../../actions/beer_actions';
import { fetchResults, search } from '../../actions/search_actions'

const mapStateToProps = (state) => {
  return {
    beers: Object.keys(state.beers).map(key => state.beers[key])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchResults: () => dispatch(fetchResults()),
    search: search
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
