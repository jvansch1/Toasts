import { connect } from 'react-redux';
import BreweryShow from './brewery_show';
import { fetchBrewery } from '../../actions/brewery_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    brewery: state.breweries[ownProps.params.breweryId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBrewery: (id) => dispatch(fetchBrewery(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BreweryShow);
