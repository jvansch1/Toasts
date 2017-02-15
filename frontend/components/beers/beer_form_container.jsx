import { connect } from 'react-redux';
import BeerForm from './beer_form';
import { createBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBeer: (beer) => dispatch(createBeer(beer))
  };
};

export default connect(null, mapDispatchToProps)(BeerForm);
