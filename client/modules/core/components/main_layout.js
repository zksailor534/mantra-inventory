import React from 'react';
import TopNav from '../containers/topnav';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <TopNav />
    </header>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
