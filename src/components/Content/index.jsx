import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from '../../../node_modules/prop-types';

import Home from '../Home/';
import About from '../About/';
import Projects from '../Projects/';
import ProjectDetail from '../Projects/ProjectDetail';
import Skills from '../Skills/';

import './index.css';

const Content = (props) => {
  // only show content when ready
  if (!props.show) {
    return (
      <div className="Content" />
    );
  }

  return (
    <div className="Content">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects/:name" component={ProjectDetail} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

Content.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Content;
