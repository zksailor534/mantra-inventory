import React from 'react';
import { mount } from 'react-mounter';

import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/layout.main';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>Home</div>)
      });
    }
  });
}
