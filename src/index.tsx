import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import App from './App';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 80px;
  background-color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Gridbox = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: 1680px;
  opacity: 15%;
`;
const Grid = styled.div`
  background-color: red;
  width: 189px;
  height: 100%;
`;
const InnerContainer = styled.div`
  width: 1680px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
`;

const StyledImg = styled.img`
  height: 50%;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <InnerContainer>
        <StyledImg src={process.env.PUBLIC_URL + 'img/home/logo_symbol.png'} />
      </InnerContainer>
    </StyledNavbar>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <Gridbox>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </Gridbox>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
