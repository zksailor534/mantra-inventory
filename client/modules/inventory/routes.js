import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout';
import ManageInventory from './containers/manage_inventory';
import AddItem from './containers/add_item';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/inventory/manage', {
    name: 'Manage Inventory',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <ManageInventory />
        )
      });
    }
  });

  FlowRouter.route('/inventory/new', {
    name: 'Add Inventory',
    action() {
      mount(MainLayoutCtx, {
        content: () => (
          <AddItem />
        )
      });
    }
  });
}
