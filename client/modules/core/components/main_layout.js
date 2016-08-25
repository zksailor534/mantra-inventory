import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Inventory App</Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/inventory/manage">Manage</NavItem>
            <NavItem eventKey={3} href="/inventory/new">New</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
