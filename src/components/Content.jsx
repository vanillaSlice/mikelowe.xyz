import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import HomeRoute from './HomeRoute';
import Route1 from './Route1';
import Route2 from './Route2';

const history = createBrowserHistory();

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  /**
   * Add routes here
   */
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/route1" component={Route1} />
          <Route path="/route2" component={Route2} />
          <Route path="/" component={HomeRoute} />
        </Switch>
      </Router>
    );
  }
}

export default Content;
