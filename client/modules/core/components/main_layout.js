import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>Inventory App</h1>
      <a href="/">Home</a><span> | </span>
      <a href="/inventory/manage">Manage</a><span> | </span>
      <a href="/inventory/new">New</a>
    </header>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
