import React from 'react';
import { Portfolio } from '../../components/consultant/portfolio';
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
    <Portfolio />
    <Banner5 />
    <Banner6 />
  </>
);

export default Home;
