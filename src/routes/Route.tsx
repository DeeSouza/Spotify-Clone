import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import DefaultLayout from '../pages/Layout/DefaultLayout';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  toggleTheme(): void;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  toggleTheme,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <DefaultLayout toggleTheme={toggleTheme}>
          <Component />
        </DefaultLayout>
      )}
    />
  );
};

export default Route;
