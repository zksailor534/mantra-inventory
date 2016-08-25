import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AddItem from '../add_item';

storiesOf('inventory.AddItem', module)
  .add('default view', () => {
    return (
      <AddItem />
    );
  })
