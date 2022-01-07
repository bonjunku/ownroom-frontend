import React from 'react';
import styled from 'styled-components';
import { Container } from './container';

export const StyledImg = styled.img`
  height: 30.4px;
  margin-top: 24.3px;
`;
export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: var(--gray-white);
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Container width={'1440px'} height={'80px'}>
        <StyledImg src={process.env.PUBLIC_URL + 'img/home/logo_symbol.png'} />
      </Container>
    </StyledNavbar>
  );
};
