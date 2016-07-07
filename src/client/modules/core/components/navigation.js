import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

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
            <NavDropdown eventKey={1} title="Inventory" id="inventory-dropdown">
              <MenuItem eventKey={1.1} href='/inventory/list'>Lot List</MenuItem>
              <MenuItem eventKey={1.2} href='/inventory/new'>New Lot</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Production" id="production-dropdown">
              <MenuItem eventKey={2.1} href='/production/orderlist'>Schedule</MenuItem>
              <MenuItem eventKey={2.2} href='/production/neworder'>New Order</MenuItem>
            </NavDropdown>
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
