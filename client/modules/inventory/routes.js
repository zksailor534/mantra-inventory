import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout';
import ManageInventory from './containers/manage_inventory';
import AddItem from './containers/add_item';

export default function (injectDeps, { Meteor, FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const publicRedirect = (context, redirect) => {
    if ( !Meteor.userId() ) {
      redirect('login', context.params);
    }
  };

  const inventoryRoutes = FlowRouter.group({
    name: 'inventory-routes',
    triggersEnter: [ publicRedirect ],
  });

  inventoryRoutes.route('/inventory/manage', {
    name: 'inventory-main',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <ManageInventory />
        )
      });
    }
  });

  inventoryRoutes.route('/inventory/new', {
    name: 'inventory-new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <AddItem />
        )
      });
    }
  });
}
