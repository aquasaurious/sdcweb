import React, { Component } from 'react';
import logo from '../img/SDC_transparent.png';
import achc from '../img/ACHC.png';

class Heading extends Component {
  render() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="/">
            <img src={achc} className="App-logo" alt="accred" /><img src={logo} className="App-logo" alt="logo" />
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/appointments">Appointments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/sleep-troubles">Issues</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/patients">Patients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/physisicans">Physicians</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default Heading;
