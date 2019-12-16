import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as pages from 'pages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={pages.Signin} />
        <Route exact path="/signup" component={pages.Signup} />
      </Switch>
    </Router>
  );
}
