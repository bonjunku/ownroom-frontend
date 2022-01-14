import React from 'react';
import { PortfolioList } from '../../components/consultant/portfolioList';
import { ConsultantTitle } from '../../components/consultant/consultantTitle';
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from '../../components/home/banner';

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
