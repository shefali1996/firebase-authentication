import React, { Component } from "react";

import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

export default class NavSection extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">
                  Login
                </Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}
