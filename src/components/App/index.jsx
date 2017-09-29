import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/';
import Content from '../Content/';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showContent: false };

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  handleTransitionEnd() {
    this.setState({ showContent: true });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar onComplete={this.handleTransitionEnd} />
          <Content show={this.state.showContent} />
        </div>
      </Router>
    );
  }
}

export default App;
