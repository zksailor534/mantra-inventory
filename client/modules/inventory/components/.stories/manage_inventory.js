import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ManageInventory from '../manage_inventory';

storiesOf('inventory.ManageInventory', module)
  .add('default view', () => {
    return (
      <ManageInventory />
    );
  })
