import React from 'react';
import { mount } from 'react-mounter';
import Col from 'react-bootstrap/lib/Col';

import MainLayout from './components/main_layout';
import Home from './components/home';

export default function (injectDeps, { FlowRouter, Accounts }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div className="container">
            <Home />
          </div>
        )
      });
    }
  });

  FlowRouter.route('/login', {
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
