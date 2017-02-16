import { connect } from 'react-redux';
import { fetchBreweries, createBrewery } from '../../actions/brewery_actions';
import BreweryForm from './brewery_form';

const mapStateToProps = (state) => {
  return {
    breweries: state.breweries
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    fetchBreweries: () => dispatch(fetchBreweries()),
    createBrewery: (brewery) => dispatch(createBrewery(brewery))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BreweryForm);
