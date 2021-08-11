import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ProductPage from './ProductPage';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';
import NotFoundPage from './NotFound';
import LoginPage from './LoginPage';

const Routes: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect exact={true} from='/' to='/products' />
          <Route exact={true} path='/products' component={ProductsPage} />
          <Route path='/products/:id' component={ProductPage} />
          <Route path='/admin'>
            {loggedIn ? <AdminPage /> : <Redirect to='login' />}
          </Route>
          <Route path='/login' component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default Routes;
