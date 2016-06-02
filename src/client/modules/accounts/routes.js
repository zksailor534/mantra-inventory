import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from 'client/modules/core/components/main_layout';
import Register from './components/register';
import Login from './components/login';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/register', {
    name: 'accounts.register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'accounts.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
}
