import { Provider } from 'react-redux';
import React from 'react';
import { Link } from 'react-router'
import HeaderContainer from './header/header_container'


const App = (props) => {
  const renderHeader = () => {
    if (props.location.pathname !== '/') {
      <HeaderContainer />
    }
  }

  return (
    <div id="app-root">
      {props.children}
      {renderHeader()}
    </div>
  );
};

export default App;
