import React, { Component } from 'react';
import { link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import logo from './logo-medium.png';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar slideInLeft">
        <link src="/route2" title="route2" />
        {/* <img src={logo} alt="Logo" />
        <h2><span className="first">Mike</span> <span className="second">Lowe</span></h2>
        <h2><span className="job">Software</span> Developer</h2>
        <ul>
          <li className="active"><a href="#">Home</a><span className="arrow" /></li>
          <li><a href="#">Work</a><span className="arrow" /></li>
          <li><a href="#">About</a><span className="arrow" /></li>
          <li><a href="#">Skills</a><span className="arrow" /></li>
        </ul>
        <ul className="social">
          <li><FontAwesome className="logo" name="envelope" tag="i" /> Contact</li>
          <li><FontAwesome className="logo" name="github" tag="i" /> GitHub</li>
          <li><FontAwesome className="logo" name="codepen" tag="i" /> Codepen</li>
        </ul> */}
      </nav>
    );
  }
}

export default Navbar;
