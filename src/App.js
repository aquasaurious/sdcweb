import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading.js';
import Home from './components/Home.js';
import Appts from './components/Appts.js';
import About from './components/About.js';
import Issues from './components/Issues.js';
import Patients from './components/Patients.js';
import Physicians from './components/Physicians.js';
import Footing from './components/Footing.js';
import Epworth from './components/Epworth.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div class="appbody">
        <Heading />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/appointments' component={Appts}/>
            <Route path='/about' component={About}/>
            <Route path='/sleep-troubles' component={Issues}/>
            <Route path='/patients' component={Patients}/>
            <Route path='/physicians' component={Physicians}/>
            <Route path='/epworth' component={Epworth}/>
          </Switch>
        </Router>
        <Footing />
      </div>
    );
  }
}

export default App;
