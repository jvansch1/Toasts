import { Provider } from 'react-redux';
import React from 'react';
import { Link } from 'react-router'


const App = (props) => {
  return (
    <div id="app-root">
      {props.children}
    </div>
  );
};

export default App;
