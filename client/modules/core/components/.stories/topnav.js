import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import TopNav from '../topnav';

storiesOf('core.TopNav', module)
  .add('default view', () => {
    return (
      <TopNav />
    );
  });
