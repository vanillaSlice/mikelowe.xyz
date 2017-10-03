import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import logoMd from './logo-md.png';
import logoSm from './logo-sm.png';

import './index.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { collapsed: true };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    return (
      <nav className={`Navbar ${this.state.collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="header">
          <Link to="/">
            <img className="logo logo-sm" src={logoSm} alt="Logo" />
            <img className="logo logo-md" src={logoMd} alt="Logo" />
          </Link>
          <h1 className="name">
            <Link to="/">
              <span className="first">Mike</span> <span className="second">Lowe</span>
            </Link>
          </h1>
          <h2 className="job">
            Software<br /><strong>Developer</strong>
          </h2>
          <button
            type="button"
            className="toggle"
            onClick={this.handleToggleClick}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="menu">
          <div className="links">
            <NavLink to="/" activeClassName="active" exact>
              Home<span className="arrow" />
            </NavLink>
            <NavLink to="/about" activeClassName="active">
              About<span className="arrow" />
            </NavLink>
            <NavLink to="/projects" activeClassName="active">
              Projects<span className="arrow" />
            </NavLink>
            <NavLink to="/skills" activeClassName="active">
              Skills<span className="arrow" />
            </NavLink>
          </div>
          <div className="social">
            <a href="mailto:mikelowedev@gmail.com">
              <FontAwesome className="icon" name="envelope" tag="i" />
              <span className="sr-only">E-mail</span>
            </a>
            <a href="https://github.com/vanillaSlice">
              <FontAwesome className="icon" name="github" tag="i" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://codepen.io/vanillaSlice/">
              <FontAwesome className="icon" name="codepen" tag="i" />
              <span className="sr-only">Codepen</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
