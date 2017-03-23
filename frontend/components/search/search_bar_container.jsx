import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchBeers } from '../../actions/beer_actions';
import { fetchResults, search, deleteResults } from '../../actions/search_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    beers: Object.keys(state.beers).map(key => state.beers[key]),
    search: state.search
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers()),
    fetchResults: (value) => dispatch(fetchResults(value)),
    deleteResults: () => dispatch(deleteResults())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
