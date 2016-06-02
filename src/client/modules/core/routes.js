import React from 'react';
import { mount } from 'react-mounter';

import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/main_layout';

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
}
