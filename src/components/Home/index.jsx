import React, { Component } from 'react';
import Typed from 'typed.js';
import Transition from 'react-transition-group/Transition';

import './index.css';

const duration = 400;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const options = {
  strings: [
    '^2500Hi! ^125My name is <strong>Mike</strong>.',
    'I&apos;m a software developer based in <strong>Manchester</strong>.',
    'Have a look around.<br>^250Check out my <a href="#/projects"><span>work</span></a>.<br>^250Feel free to get in <a href="mailto:mikelowedev@gmail.com">touch</a>.<br>^500:)&nbsp;'],
  typeSpeed: 40,
  backDelay: 1000,
  backSpeed: 20,
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.initTyped = this.initTyped.bind(this);
    this.destroyTyped = this.destroyTyped.bind(this);
  }

  componentDidMount() {
    this.initTyped();
  }

  componentWillUnmount() {
    this.destroyTyped();
  }

  initTyped() {
    this.setState({ typed: new Typed(this.typedElement, options) });
  }

  destroyTyped() {
    this.state.typed.destroy();
  }

  render() {
    return (
      <Transition appear in timeout={0}>
        {state => (
          <div
            className="Home"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <p className="message">
              <span ref={(typedElement) => { this.typedElement = typedElement; }} />
            </p>
          </div>
        )}
      </Transition>
    );
  }
}

export default Home;
