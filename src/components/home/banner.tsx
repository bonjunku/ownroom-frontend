import React from 'react';
import styled from 'styled-components';
import { Container, IContainer } from '../@shared/container';

// StyledBanner
export const StyledBanner1 = styled.img`
  height: 650px;
  width: 1920px;
`;
export const StyledBanner2 = styled.div`
  height: 620px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
`;

// BannerText

export const Banner2Text1 = styled.span`
  margin-top: 195px;
  color: var(--brand-orange-001);
`;
export const Banner2Text2 = styled.span`
  margin-top: 30px;
`;

// BannerImg

export const BannerImg = styled.img`
  width: 850px;
  height: 420px;
  margin-top: 100px;
`;

export const Banner1 = () => (
  <StyledBanner1
    src={process.env.PUBLIC_URL + 'img/home/배너이미지.jpg'}
  ></StyledBanner1>
);

export const Banner2 = () => (
  <StyledBanner2>
    <Container width={'1440px'} height={'620px'}>
      <Container width={'100%'} direction={'left'} flexDirection="column">
        <Banner2Text1 className="KRDisplay-2">
          1인가구에게 알맞는
          <br />
          일대일 인테리어 컨설팅 서비스
        </Banner2Text1>
        <Banner2Text2 className="KRBody-2">
          부담이 적은 무시공만으로 나만의 공간을 바꿔보세요.
          <br />
          각자의 방에서 더 의미있는 시간을 보낼 수 있도록
          <br />
          온룸은 맞춤형 인테리어 기회를 제공합니다.
        </Banner2Text2>
      </Container>
      <Container direction={'right'} width={'100%'}>
        <BannerImg
          src={process.env.PUBLIC_URL + 'img/home/배너이미지.jpg'}
        ></BannerImg>
      </Container>
    </Container>
  </StyledBanner2>
);
