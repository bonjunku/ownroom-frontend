import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './common/globalstyle';
import Home from './features/home/home';
import { Navbar } from './common/navbar';
import { Footer } from './common/footer';
import { ConsultantPortfolio } from './features/consultantPortfolio/consultantPortfolio';
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="consultant">
              <Route path="application" element={<ConsultantApplication />} />
            </Route>
            <Route path="consulting">
              <Route
                path="application/:nickname"
                element={<ConsultingApplication />}
              />
              <Route path="report/:nickname" element={<ConsultingReport />} />
            </Route>
            <Route
              path="consultantPortfolio"
              element={<ConsultantPortfolio />}
            />
            <Route path="portfolio/:id" element={<PortfolioDetail />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="welcome" element={<Welcome />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
