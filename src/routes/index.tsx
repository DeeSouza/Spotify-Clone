import React from 'react';
import { Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Route from './Route';

interface IProps {
  toggleTheme(): void;
}

const Routes: React.FC<IProps> = ({ toggleTheme }) => (
  <Switch>
    <Route path="/" exact component={Main} toggleTheme={toggleTheme} />
  </Switch>
);

export default Routes;
