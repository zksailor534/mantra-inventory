import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/Navitem';

const Navigation = () => (
  <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Mantra Inventory</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/inventory/list">Inventory</NavItem>
        <NavItem eventKey={2} href="/inventory/new">New Lot</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
