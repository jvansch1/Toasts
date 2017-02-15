import { Provider } from 'react-redux';
import React from 'react';

const App = (props) => {
  return (
    <div id="app-root">

      {props.children}
    </div>
  );
};

export default App;
