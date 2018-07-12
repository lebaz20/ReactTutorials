import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const loggedIn = localStorage && localStorage.getItem('jwt');
const LegacyNavBar = () => (
  <div>
    <Nav horizontal='center'>
      <NavItem>
        <NavLink href="/">
Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/About">
About
        </NavLink>
      </NavItem>
      { loggedIn
        ? (
          <div>
            <NavItem>
              <NavLink href="/User/Profile">
Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/User/Logout">
Logout
              </NavLink>
            </NavItem>
          </div>
        )
        : (
          <NavItem>
            <NavLink href="/User/Login">
Login
            </NavLink>
          </NavItem>
        )
        }
    </Nav>
  </div>
);

export default LegacyNavBar;
