import React from 'react';
import { PortfolioList } from '../consultantPortfolio/components/portfolioList';
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
    <PortfolioList />
    <Banner5 />
    <Banner6 />
  </>
);

export default Home;
