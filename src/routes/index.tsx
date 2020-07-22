import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '../pages/Main';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
