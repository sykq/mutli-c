import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class="link-container">
            <div class="link-container__element">
              <Link className="App-link" to="/">
                Home
              </Link>
            </div>
            <div class="link-container__element">
              <Link className="App-link" to="/otherPage">
                Other Page
              </Link>
            </div>
          </div>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherPage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
