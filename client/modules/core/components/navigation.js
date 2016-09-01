import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
  userName() {
    const user = Meteor.user();
    const name = user && user.profile ? user.profile.name : '';
    return user ? `${name.first} ${name.last}` : '';
  }

  accountLinks() {
    if (Meteor.userId()) {
      return (
        <Nav pullRight>
          <NavDropdown eventKey={'n'} title={ this.userName() } id="user-dropdown">
            <MenuItem eventKey={'n.1'} onClick={ this.handleLogout() }>Logout</MenuItem>
          </NavDropdown>
        </Nav>
      );
    }
    return (
      <Nav pullRight>
        <NavItem eventKey={'n'} href="/login">Sign In</NavItem>
      </Nav>
    );
  }

  render() {
    return (
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
          {this.accountLinks()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
