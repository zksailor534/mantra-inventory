import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/Navitem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a href="/">Mantra Inventory</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='/inventory/list'>Inventory</NavItem>
            <NavItem eventKey={2} href='/inventory/new'>New Lot</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={1} title='Account' id='account-dropdown'>
              <MenuItem eventKey={1.1} href='/login'>Login</MenuItem>
              <MenuItem eventKey={1.2} href='/register'>Register</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
