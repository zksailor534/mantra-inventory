import React from 'react';
import { mount } from 'react-mounter';
import Col from 'react-bootstrap/lib/Col';

import MainLayout from './components/main_layout';
import Home from './components/home';

export default function (injectDeps, { Meteor, FlowRouter, Accounts }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const publicRedirect = (context, redirect) => {
    if ( Meteor.userId() ) {
      redirect('inventory-main', context.params);
    }
  };

  const publicRoutes = FlowRouter.group({
    name: 'public-routes',
    triggersEnter: [ publicRedirect ],
  });

  publicRoutes.route('/', {
    name: 'public',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <Home />
        )
      });
    }
  });

  publicRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div className="container">
            <Col xs={8} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
              <Accounts.ui.LoginForm />
            </Col>
          </div>
        )
      });
    }
  });
}
