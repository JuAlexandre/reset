import React from 'react';
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
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md" expand="md" className="navbar">
          <NavbarBrand className="navbar__link" href="/">
            Reset
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navbar__link" href="#home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar__link" href="#cocon">
                  Le concon
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar__link" href="#features">
                  Fonctionnalités
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar__link" href="#try">
                  Télecharger
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar__link" href="#avis">
                  Avis
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navbar__link" href="#contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
