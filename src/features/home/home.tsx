import React from 'react';
import { PortfolioPreviewList } from '../consultantPortfolio/components/portfolioList';
import { ConsultantTitle } from './components/consultantTitle';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from './components/banner';

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
