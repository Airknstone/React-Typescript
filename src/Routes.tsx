import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProductPage from './ProductPage';
import ProductsPage from './ProductsPage';
import Header from './Header';
import NotFoundPage from './NotFound';
import LoginPage from './LoginPage';

const AdminPage = React.lazy(() => import('./AdminPage'));

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Route component={Routes} />
    </Router>
  );
};

const Routes: React.FC<RouteComponentProps> = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          timeout={500}
          classNames='animate'
        >
          <Switch>
            <Redirect exact={true} from='/' to='/products' />
            <Route exact={true} path='/products' component={ProductsPage} />
            <Route path='/products/:id' component={ProductPage} />
            <Route path='/admin'>
              {loggedIn ? (
                <Suspense
                  fallback={<div className='page-container'>Loading...</div>}
                >
                  <AdminPage />
                </Suspense>
              ) : (
                <Redirect to='login' />
              )}
            </Route>
            <Route path='/login' component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default RoutesWrap;
