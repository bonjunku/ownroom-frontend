import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

import Home from './pages/home/home';
import styled from 'styled-components';
import { Navbar } from './components/@shared/navbar';
import { Banner1, Banner2 } from './components/home/banner';

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

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      {/* <Gridbox>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </Gridbox> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
