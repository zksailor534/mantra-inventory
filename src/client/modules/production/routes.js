import React from 'react';
import { mount } from 'react-mounter';

import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/main_layout';
import OrderList from 'client/modules/production/containers/orderlist';
import OrderDetail from 'client/modules/production/containers/orderdetail';
import NewOrder from 'client/modules/production/containers/neworder';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/production/orderlist', {
    name: 'orders.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<OrderList />)
      });
    }
  });

  FlowRouter.route('/production/order/:orderId', {
    name: 'orders.single',
    action({ orderId }) {
      mount(MainLayoutCtx, {
        content: () => (<OrderDetail orderId={orderId}/>)
      });
    }
  });

  FlowRouter.route('/production/neworder', {
    name: 'neworder',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewOrder />)
      });
    }
  });
}
