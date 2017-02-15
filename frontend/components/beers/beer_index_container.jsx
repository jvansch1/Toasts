import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beer_actions';

const mapStateToProps = (state) => {
  return {
    beers: state.beers
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    fetchBeers: () => dispatch(fetchBeers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);
