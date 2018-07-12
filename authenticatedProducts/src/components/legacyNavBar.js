import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const loggedIn = localStorage && localStorage.getItem('jwt');
const LegacyNavBar = () => (
  <div>
    <Nav>
      <NavLink href="/">
Home
      </NavLink>
      {'  '}
      <NavLink href="/About">
About
      </NavLink>
      {'  '}
      { loggedIn
        ? (
          [
            <NavLink key="profile" href="/User/Profile">
Profile
            </NavLink>,
            '  ',
            <NavLink key="logout" href="/User/Logout">
Logout
            </NavLink>,
          ]
        )
        : (
          <NavLink href="/User/Login">
Login
          </NavLink>
        )
        }
    </Nav>
  </div>
);

export default LegacyNavBar;
