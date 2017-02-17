import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LandingContainer from './landing/landing_container';
import HomeContainer from './home/home_container';
import AuthFormContainer from './auth/auth_form_container';
import BeerFormContainer from './beers/beer_form_container';
import BreweryFormContainer from './breweries/brewery_form_container';
import BeerIndexContainer from './beers/beer_index_container';
import BreweryIndexContainer from './breweries/brewery_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import BeerShowContainer from './beers/beer_show_container';
import CheckinContainer from './checkins/checkin_container';


const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;

    if (currentUser) {
      replace('/home')
    }
  }

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router  history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LandingContainer} />
          <Route path='login' component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='signup' component={AuthFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='home' component={HomeContainer} onEnter={_ensureLoggedIn}/>
          <Route path='breweries' component={BreweryIndexContainer} />
          <Route path='newBeer' component={BeerFormContainer} />
          <Route path='newBrewery' component={BreweryFormContainer} />
          <Route path='breweries/:breweryId' component={BreweryShowContainer} />
          <Route path='beers/:beerId' component={BeerShowContainer}>
            <Route path='checkin' component={CheckinContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>


  );
};

export default Root;
