import React from 'react';
import { PortfolioPreviewList } from '../consultantPortfolio/components/portfolioList';
import { ConsultantTitle } from './components/consultantTitle';
import { Banner1 } from './components/banner1';
import { Banner2 } from './components/banner2';
import { Banner3 } from './components/banner3';
import { Banner4 } from './components/banner4';
import { Banner5 } from './components/banner5';
import { Banner6 } from './components/banner6';

const Home = () => (
  <>
    <Banner1 />
    <Banner2 />
    <Banner3 />
    <Banner4 />
    <ConsultantTitle />
    <PortfolioPreviewList />
    <Banner5 />
    <Banner6 />
  </>
);

export default Home;
