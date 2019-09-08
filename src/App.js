import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BurgerMenu from "./components/BurgerMenu"

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BurgerMenu />
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
