import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/';
import About from '../About/';
import Projects from '../Projects/';
import Skills from '../Skills';

import './index.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
   * Add routes here
   */
  render() {
    if (!this.props.show) {
      return (
        <div className="content" />
      );
    }
    return (
      <div className="content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Content;
