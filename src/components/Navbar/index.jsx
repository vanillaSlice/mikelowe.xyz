import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Transition from 'react-transition-group/Transition';

import logo from './logo-md.png';

import './index.css';

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Transition appear in timeout={0} addEndListener={node => node.addEventListener('transitionend', this.props.onComplete)}>
        {state => (
          <nav
            className="navbar slideInLeft"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <img src={logo} alt="Logo" />
            <h2><span className="first">Mike</span> <span className="second">Lowe</span></h2>
            <h2><span className="job">Software</span> Developer</h2>
            <ul>
              <li><Link to="/">Home</Link><span className="arrow" /></li>
              <li><Link to="/about">About</Link><span className="arrow" /></li>
              <li><Link to="/projects">Projects</Link><span className="arrow" /></li>
              <li><Link to="/skills">Skills</Link><span className="arrow" /></li>
            </ul>
            <ul className="social">
              <li><FontAwesome className="logo" name="envelope" tag="i" /> E-mail</li>
              <li><FontAwesome className="logo" name="github" tag="i" /> GitHub</li>
              <li><FontAwesome className="logo" name="codepen" tag="i" /> Codepen</li>
            </ul>
          </nav>
        )}
      </Transition>
    );
  }
}

export default Navbar;
