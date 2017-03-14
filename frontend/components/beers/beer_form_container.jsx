import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { createBeer } from '../../actions/beer_actions';
import { fetchBreweries } from '../../actions/brewery_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.breweries)
  return {
    breweries: Object.keys(state.breweries).map(key => state.breweries[key])
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer)),
    fetchBreweries: () => dispatch(fetchBreweries())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);
