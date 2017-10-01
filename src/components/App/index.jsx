import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/';
import Content from '../Content/';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      pressed: [],
      secretCode: 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba',
    };

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp, false);
  }

  handleKeyUp(event) {
    this.setState((prevState) => {
      let pressed = [...prevState.pressed, event.key];
      pressed.splice(
        -prevState.secretCode.length - 1,
        pressed.length - prevState.secretCode.length);

      if (pressed.join('').includes(prevState.secretCode)) {
        window.Cagealicious.add();
        pressed = [];
      }

      return { pressed };
    });
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
