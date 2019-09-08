import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BurgerMenu from "./components/BurgerMenu"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Chapter } from "./components/Chapter"
import MainPage from "./components/MainPage"
import { data } from "./data/data"

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <BurgerMenu styles={{ backgroundColor: `#4C6667` }} />
          <Route exact path='/' component={MainPage}></Route>
          {/* <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" /> 
            <p>
              Edit <code>src/App.js</code> and save to reload.
           </p>
          </div> */}
          <Route path="/1" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[0].chapterTitle}
              chapterQuote={data[0].chapterQuote}
              authorQuote={data[0].authorQuote}
              poems={data[0].poems} />}
            style={{
              padding: "0 3%"
            }} />


          <Route path="/2" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[1].chapterTitle}
              chapterQuote={data[1].chapterQuote}
              authorQuote={data[1].authorQuote}
              poems={data[1].poems} />} />

        </div>
      </div>
    </Router >
  );
}

export default App;
