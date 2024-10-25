import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: red;
`;

const Navigation = () => {
  return (
    <Nav>
        <Link to={'/'}>Notes</Link>
        <Link to={'/add-notes'}>Notes</Link>
    </Nav>
  )
}

export default Navigation
