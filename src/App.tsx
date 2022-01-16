import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalstyle';

import Home from './pages/home/home';
import styled, { CSSProperties } from 'styled-components';
import { Navbar } from './components/@shared/navbar';
import { Banner1, Banner2 } from './components/home/banner';
import { PortfolioList } from './components/consultant/portfolioList';
import { Footer } from './components/@shared/footer';
import { ConsultantPortfolio } from './pages/consultant/consultant_portfolio';
import { Container } from './components/@shared/container';
import { Portfolio } from './components/consultant/portfolio';
import { MyPage } from './pages/mypage/mypage';
import { LogIn } from './pages/login/login';
import { SignUp } from './pages/signup/signup';

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
            <Route
              path="portfolioList"
              element={<ConsultantPortfolio />}
            ></Route>
          </Route>
          <Route path="portfolio/id" element={<Portfolio />}></Route>
          <Route path="mypage" element={<MyPage />}></Route>
          <Route path="login" element={<LogIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
