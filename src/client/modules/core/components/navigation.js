import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/Navitem';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a href="/">Mantra Inventory</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='/'>Home</NavItem>
            <NavItem eventKey={2} href='/inventory/list'>Inventory</NavItem>
            <NavItem eventKey={3} href='/inventory/new'>New Lot</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={'login'} href='/login'>Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
