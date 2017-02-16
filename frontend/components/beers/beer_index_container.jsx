import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';
import BeerIndex from './beer_index';

const mapStateToProps = (state) => {
  return {
    beers: Object.keys(state.beers).map(key => state.beers[key]),
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);
