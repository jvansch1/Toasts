import { connect } from 'react-redux';
import SearchResults from './search_results';
import { search } from '../../actions/search_actions'


const mapStateToProps = (state) => {
  return {
    results: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: search
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
