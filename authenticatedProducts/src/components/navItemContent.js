import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const NavItemContent = ({
  tabId, activeTabId, toggle, title,
}) => (
  <NavItem>
    <NavLink
      className={classnames({ active: activeTabId === tabId })}
      onClick={() => { toggle(tabId); }}
    >
      {title}
    </NavLink>
  </NavItem>
);

export default NavItemContent;
