import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return(
      <Container>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Trade Logs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    )
  }
}

  export default SideMenu;