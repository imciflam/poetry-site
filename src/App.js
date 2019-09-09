import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BurgerMenu from "./components/BurgerMenu"
import { HashRouter as Router, Route } from 'react-router-dom'
import { Chapter } from "./components/Chapter"
import MainPage from "./components/MainPage"
import { data } from "./data/data"

function App() {
  return (
    <Router>
      <div className="App">
        <div className='container'>
          <div style={{ backgroundColor: `#263333` }}><BurgerMenu styles={{ backgroundColor: `#4C6667` }} /></div>
          <Route exact path='/' component={MainPage}></Route>
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

          <Route path="/3" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[2].chapterTitle}
              chapterQuote={data[2].chapterQuote}
              authorQuote={data[2].authorQuote}
              poems={data[2].poems} />} />

           <Route path="/4" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[3].chapterTitle}
              chapterQuote={data[3].chapterQuote}
              authorQuote={data[3].authorQuote}
              poems={data[3].poems} />} />
              
            <Route path="/5" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[4].chapterTitle}
              chapterQuote={data[4].chapterQuote}
              authorQuote={data[4].authorQuote}
              poems={data[4].poems} />} />

            <Route path="/6" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[6].chapterTitle}
              chapterQuote={data[6].chapterQuote}
              authorQuote={data[6].authorQuote}
              poems={data[6].poems} />} />

          <Route path="/7" render={(props) =>
            <Chapter {...props}
              chapterTitle={data[6].chapterTitle}
              chapterQuote={data[6].chapterQuote}
              authorQuote={data[6].authorQuote}
              poems={data[6].poems} />} />
 
        </div>
      </div>
    </Router >
  );
}

export default App;
