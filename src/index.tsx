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
  width: 1440px;
  opacity: 15%;
`;
const Grid = styled.div`
  background-color: red;
  width: 159px;
  height: 100%;
`;
const InnerContainer = styled.div`
  width: 1440px;
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

const BannerContainer = styled.img`
  height: 650px;
  width: 100%;
`;
const Banner = () => (
  <BannerContainer
    src={process.env.PUBLIC_URL + 'img/home/배너이미지.jpg'}
  ></BannerContainer>
);

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
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
