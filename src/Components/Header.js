import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  render() {
      let nav;
     if(this.props.accessToken){
            nav = <NavItem>
                        <NavLink onClick={this.props.onLogout} href="#">Logout</NavLink>
                    </NavItem>;
        }else{
            nav = <NavItem>
                        <NavLink onClick={this.props.onLogin} href="#">Login</NavLink>
                    </NavItem>;
          }
    return (

        <Navbar>
                <NavbarBrand>
                    Github Searcher
                </NavbarBrand>
            <Nav>
               {nav}
            </Nav>
        </Navbar>
      
    );
  }
}

export default Header;
