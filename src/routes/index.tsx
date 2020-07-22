import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
