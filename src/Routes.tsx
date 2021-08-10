import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProductPage from './ProductPage';
import AdminPage from './AdminPage';
import ProductsPage from './ProductsPage';
import Header from './Header';
import NotFoundPage from './NotFound';

const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact={true} path='/products' component={ProductsPage} />
          <Route path='/products/:id' component={ProductPage} />
          <Route path='/admin' component={AdminPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default Routes;
