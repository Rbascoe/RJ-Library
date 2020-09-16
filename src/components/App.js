import React from 'react';

import Library from './library.js'


import { render } from '@testing-library/react';

class App extends React.Component {


// getBooks = () => {
//   fetch(`./data/books.js`, 
//   {method: 'GET', 
//   headers: { 'Accept': 'application/json'}})
//   .then(response => response.json())
//   .then(console.log)
// }




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
