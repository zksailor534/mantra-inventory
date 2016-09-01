import React from 'react';
import Navigation from '../containers/navigation';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navigation />
    </header>
    {content()}
  </div>
);

export default Layout;
