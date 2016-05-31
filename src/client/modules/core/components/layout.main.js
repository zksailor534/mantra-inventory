import React from 'react';
import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <h1>Mantra Inventory</h1>
      <Navigation />
    </header>

    <div>
      {content()}
    </div>

    <footer>
      <small>
        Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a>, Meteor, & Webpack.
      </small>
    </footer>
  </div>
);

export default Layout;
