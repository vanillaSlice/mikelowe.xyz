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

const Projects = () => (
  <Transition appear in timeout={0}>
    {state => (
      <div
        className="Projects"
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <h3>Projects</h3>
        <p>
          Hodor hodor HODOR! Hodor hodor hodor hodor hodor! Hodor hodor - hodor; hodor hodor?
          Hodor, hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor,
          hodor - hodor, hodor. Hodor hodor. Hodor hodor HODOR! Hodor hodor hodor hodor, hodor,
          hodor hodor.
        </p>
        <p>
          Hodor. Hodor HODOR hodor, hodor hodor. Hodor. Hodor hodor hodor, hodor. Hodor hodor,
          hodor. Hodor hodor?! Hodor hodor, hodor. Hodor hodor? Hodor. Hodor HODOR hodor, hodor
          hodor. Hodor. Hodor hodor - hodor hodor HODOR hodor, hodor hodor?! Hodor hodor HODOR!
          Hodor hodor, hodor. Hodor hodor hodor; hodor hodor. Hodor! Hodor hodor, hodor hodor?!
          Hodor, hodor; hodor hodor, hodor. Hodor hodor hodor hodor?! Hodor. Hodor hodor... Hodor
          hodor hodor hodor!
        </p>
        <p>
          Hodor. Hodor HODOR hodor, hodor hodor. Hodor, hodor - hodor?! Hodor! Hodor hodor, hodor...
          Hodor hodor hodor, hodor, hodor hodor. Hodor hodor - HODOR hodor, hodor hodor hodor
          hodor... Hodor hodor hodor. Hodor. Hodor, hodor... Hodor hodor hodor - hodor, hodor,
          hodor hodor. Hodor! Hodor hodor, hodor - hodor - hodor - hodor?
        </p>
      </div>
    )}
  </Transition>
);

export default Projects;
