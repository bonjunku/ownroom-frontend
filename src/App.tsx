import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalstyle';

import Home from './pages/home/home';
import styled, { CSSProperties } from 'styled-components';
import { Navbar } from './components/@shared/navbar';
import { Banner1, Banner2 } from './components/home/banner';
import { Portfolio } from './components/consultant/portfolio';
import { Footer } from './components/@shared/footer';
import { ConsultantPortfolios } from './pages/consultant/consultant_portfolios';
import { Container } from './components/@shared/container';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Container height="80px" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="consultant">
            <Route path="portfolios" element={<ConsultantPortfolios />}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
