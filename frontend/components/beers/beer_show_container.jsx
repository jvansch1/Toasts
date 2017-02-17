import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer } from '../../actions/beer_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    beer: state.beers[ownProps.params.beerId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeer: (id) => dispatch(fetchBeer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow)
