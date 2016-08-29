import React from 'react';
import TopNav from '../containers/topnav';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <TopNav />
    </header>
    {content()}
  </div>
);

export default Layout;
