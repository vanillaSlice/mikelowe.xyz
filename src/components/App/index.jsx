import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../Navbar/';
import Content from '../Content/';

import './index.css';

const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      pressed: [],
    };

    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    this.appRef.addEventListener('animationend', this.handleAnimationEnd);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
    this.appRef.removeEventListener('animationend', this.handleAnimationEnd);
  }

  handleKeyUp(event) {
    // show nicolas cage if secret code is entered
    this.setState((prevState) => {
      let pressed = [...prevState.pressed, event.key];
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

      if (pressed.join('').includes(secretCode)) {
        window.Cagealicious.add();
        pressed = [];
      }

      return { pressed };
    });
  }

  handleAnimationEnd() {
    this.setState({ showContent: true });
  }

  render() {
    return (
      <Router>
        <div
          className="App"
          ref={(appRef) => { this.appRef = appRef; }}
        >
          <Navbar />
          <Content show={this.state.showContent} />
        </div>
      </Router>
    );
  }
}

export default App;
