import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const AnimatedRoute = ({ routes }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="route-transition" timeout={300}>
        <Switch location={location}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoute;