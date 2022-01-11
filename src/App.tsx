import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalstyle';

import Home from './pages/home/home';
import styled, { CSSProperties } from 'styled-components';
import { Navbar } from './components/@shared/navbar';
import { Banner1, Banner2 } from './components/home/banner';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
