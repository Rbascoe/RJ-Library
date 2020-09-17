import React, { Component } from 'react'
import Library from './library.js'

import { render } from '@testing-library/react';

class App extends React.Component {

  render(){
   
    return (
      <div className="App">
        <header className="App-header">
          <Library />
        </header>
      </div>
  );
  }
}

export default App;
