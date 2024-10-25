import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  background-color: #387d32;
  border-top-right-radius: 8px;
  color: #fff;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  gap: 1rem;
  width: 100%;
`;

const NavItem = styled.li`
  color: inherit;
  font-family: 'Roboto';
  font-size: 1rem;

  &:hover {
  opacity: 0.5
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to={"/"}>Notes</Link>
        </NavItem>
        <NavItem>
          <Link to={"/add-note"}>Add note</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
