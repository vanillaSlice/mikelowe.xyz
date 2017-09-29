import React, { Component } from 'react';
import Typed from 'typed.js';

import Navbar from './Navbar';
import Content from './Content';

import './App.css';

const options = {
  strings: [
    'Hello! ^125 My name is <a>Mike</a>.',
    'I&apos;m a software developer based in <a>Manchester</a>.',
    'Have a look around. ^250Check out my <a>work</a>. ^250Feel free to get in <a>touch</a> ^500:)&nbsp;'],
  typeSpeed: 40,
  backDelay: 1000,
  autoInsertCss: true,
  backSpeed: 20,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // this.setState({
    //   typed: new Typed(this.el, options),
    // });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        {/* <Navbar />
        <div className="content">
          <p className="welcome">
            <span ref={(el) => { this.el = el; }} />
          </p>
        </div> */}
      </div>
    );
  }
}

export default App;
