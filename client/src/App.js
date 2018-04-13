import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Doctor from './pages/Doctor';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />
          
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/doctor" component={Doctor} />
          {/* <Route path="/patient/:id" component={Profile} */}
      </div>
       </Router>
    );
  }
}

export default App;
