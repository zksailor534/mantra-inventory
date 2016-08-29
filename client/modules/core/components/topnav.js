import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class TopNav extends Component {
  accountLinks() {
    if (Meteor.userId()) {
      return (
        <Nav pullRight>
          <NavItem eventKey={'n.1'} href="#profile">{Meteor.user().emails[0].address}</NavItem>
          <NavItem eventKey={'n.2'} href="/logout">Logout</NavItem>
        </Nav>
      );
    }
    return (
      <Nav pullRight>
        <NavItem eventKey={'n.1'} href="/login">Sign In</NavItem>
        <NavItem eventKey={'n.2'} href="/sign-up">Sign Up</NavItem>
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

export default TopNav;
