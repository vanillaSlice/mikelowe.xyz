import React from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 800;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export default () => (
  <Transition appear in timeout={0}>
    {state => (
      <h1
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        /projects
      </h1>
    )}
  </Transition>
);
