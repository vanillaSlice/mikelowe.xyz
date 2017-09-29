import React, { Component } from 'react';
import Typed from 'typed.js';
import Transition from 'react-transition-group/Transition';

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
    '^2000Hi! ^125 My name is <a>Mike</a>.',
    'I&apos;m a software developer based in <a>Manchester</a>.',
    'Have a look around.<br>^250Check out my <a>work</a>.<br>^250Feel free to get in <a>touch</a>.<br>^500:)&nbsp;'],
  typeSpeed: 40,
  backDelay: 1000,
  autoInsertCss: true,
  backSpeed: 20,
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState({
      typed: new Typed(this.el, options),
    });
  }

  render() {
    return (
      <Transition appear in timeout={0}>
        {state => (
          <div
            className="welcome"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <span ref={(el) => { this.el = el; }} />
          </div>
        )}
      </Transition>
    );
  }
}

export default Home;
