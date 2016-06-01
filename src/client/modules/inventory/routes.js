import React from 'react';
import { mount } from 'react-mounter';

import { FlowRouter } from 'meteor/kadira:flow-router';
import MainLayout from 'client/modules/core/components/layout.main';
import LotList from 'client/modules/inventory/containers/lotlist';
import LotDetail from 'client/modules/inventory/containers/lotdetail';
import NewLot from 'client/modules/inventory/containers/newlot';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  // Move these as a module and call this from a main file
  FlowRouter.route('/inventory/list', {
    name: 'lots.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<LotList />)
      });
    }
  });

  FlowRouter.route('/inventory/lot/:lotId', {
    name: 'lots.single',
    action({ lotId }) {
      mount(MainLayoutCtx, {
        content: () => (<LotDetail lotId={lotId}/>)
      });
    }
  });

  FlowRouter.route('/inventory/new', {
    name: 'newlot',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewLot />)
      });
    }
  });
}
