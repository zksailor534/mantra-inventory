import React from 'react';
import { mount } from 'react-mounter';
import { Accounts } from 'meteor/std:accounts-ui';

import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/main_layout';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  loginPath: '/login',
  onSignedInHook: () => (FlowRouter.go('/')),
  onSignedOutHook: () => (FlowRouter.go('/'))
});

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'core.dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>Home</div>)
      });
    }
  });

  FlowRouter.route('/login', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <div className='center-block login-block'>
            <Accounts.ui.LoginForm />
          </div>
        )
      });
    }
  });
}
