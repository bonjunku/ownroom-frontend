import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './common/globalstyle';

import Home from './features/home/home';
import styled, { CSSProperties } from 'styled-components';
import { Navbar } from './common/navbar';
import { Banner1, Banner2 } from './features/home/components/banner';
import { PortfolioList } from './features/consultantPortfolio/components/portfolioList';
import { Footer } from './common/footer';
import { ConsultantPortfolio } from './features/consultantPortfolio/consultantPortfolio';
import { Container } from './common/container';
import { PortfolioDetail } from './features/portfolioDetail/portfolioDetail';
import { MyPage } from './features/myPage/mypage';
import { LogIn } from './features/login/login';
import { SignUp } from './features/signUp/signup';
import { ConsultantApplication } from './features/consultantApplication/consultantApplication';
import { ConsultingApplication } from './features/consultingApplication/consultingApplication';
import { Modal } from './common/modal';
import { ScrollToTop } from './common/scrollToTop';
import { Welcome } from './features/welcome/welcome';
import { ConsultingReport } from './features/consultingReport/consultingreport';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Modal /> */}
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />
          <Container height="80px" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="application">
              <Route path="consultant" element={<ConsultantApplication />} />
              <Route
                path="consulting/:nickname"
                element={<ConsultingApplication />}
              />
            </Route>
            <Route
              path="consulting/report/:nickname"
              element={<ConsultingReport />}
            />
            <Route path="portfolioList" element={<ConsultantPortfolio />} />
            <Route path="portfolio/:id" element={<PortfolioDetail />}></Route>
            <Route path="mypage" element={<MyPage />}></Route>
            <Route path="login" element={<LogIn />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="welcome" element={<Welcome />}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
