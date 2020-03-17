import React from 'react';
import PageHeader, { NavLink, HeaderNav, HomeLink }from "./styles";

// header consists of site name and navigation

const Header = () => (
  <PageHeader>
    <HomeLink>
    <NavLink to="/" >
      petra spirkova
    </NavLink>
    </HomeLink>
    <HeaderNav>
      <NavLink to="/blog/" activeClassName="current-page">
        blog
      </NavLink>
      <NavLink to="/calendar/" activeClassName="current-page">
        calendar
      </NavLink>
      <NavLink to="/about/" activeClassName="current-page">
        about
      </NavLink>
    </HeaderNav>
  </PageHeader>
);

export default Header;

