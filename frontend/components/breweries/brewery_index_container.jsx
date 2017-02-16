import { connect } from 'react-redux';
import { fetchBreweries } from '../../actions/brewery_actions'
import BreweryIndex from './brewery_index'

const mapStateToProps = (state) => {
  return {
    breweries: Object.keys(state.breweries).map(key => state.breweries[key])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreweries: () => dispatch(fetchBreweries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreweryIndex)
