import React from 'react';
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

const Skills = () => (
  <Transition appear in timeout={0}>
    {state => (
      <div
        className="Skills"
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <div className="terminal">
          <div className="top-bar">
            <span className="button close" />
            <span className="button minimise" />
            <span className="button maximise" />
          </div>
          <div className="content">
            <span className="line">
              <span className="tag">&lt;ul</span> <span className="class">class</span>=
              <span className="value">&quot;skills&quot;</span><span className="tag">&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                HTML5
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                CSS3 (including SCSS)
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                JavaScript (including ES6)
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                jQuery
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                React
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                Redux
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                Java
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                Elasticsearch
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                MongoDB
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                MySQL
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                Git
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line">
              <span className="tag">&nbsp;&nbsp;&lt;li&gt;</span>
                Linux
              <span className="tag">&lt;/li&gt;</span>
            </span>
            <span className="line tag">&lt;/ul&gt;</span>
          </div>
        </div>
      </div>
    )}
  </Transition>
);

export default Skills;
