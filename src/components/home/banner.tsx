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
export const StyledBanner3 = styled.div`
  height: 613px;
  width: 100%;
  background-color: var(--brand-yellow-001);
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

export const Banner3Text1 = styled.span`
  margin-right: 92px;
  margin-top: 195px;
  color: var(--brand-orange-001);
`;
export const Banner3Text2 = styled.span`
  margin-top: 30px;
`;

export const Banner4Text1 = styled.span`
  margin-top: 195px;
  color: var(--brand-orange-001);
`;
export const Banner4Text2 = styled.span`
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

// BannerButton
export const BannerButton = styled.button`
  margin-top: 24px;
  width: 162px;
  height: 42px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 16px 6px;
  border-radius: 10px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px var(--brand-orange-001);
  background-color: var(--brand-orange-001);
  color: var(--gray-white);
`;

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

export const Banner3 = () => (
  <StyledBanner3>
    <Container width="1440px">
      <Container>
        <BannerImg
          src={process.env.PUBLIC_URL + 'img/home/배너이미지.jpg'}
        ></BannerImg>
      </Container>
      <Container width="100%" direction="right" flexDirection="column">
        <Banner3Text1 className="KRDisplay-2">
          내가 원하는 스타일의
          <br /> 컨설턴트를 골라보세요.
        </Banner3Text1>
        <Banner3Text2 className="KRBody-2">
          온룸은 내가 원하는 컨설턴트를 직접 선택할 수 있어요.
          <br />
          다양한 스타일의 포트폴리오를 확인한 후 내가 선택한
          <br />
          컨설턴트와 함께 나만의 공간을 꾸며보세요!
        </Banner3Text2>
      </Container>
    </Container>
  </StyledBanner3>
);

export const Banner4 = () => (
  <StyledBanner2>
    <Container width={'1440px'} height={'620px'}>
      <Container width={'100%'} direction={'left'} flexDirection="column">
        <Banner4Text1 className="KRDisplay-2">
          누구나 컨설턴트가
          <br />될 수 있습니다.
        </Banner4Text1>
        <Banner4Text2 className="KRBody-2">
          인테리어에 관심이 많고 자신만의 노하우가 있다면
          <br />
          누구나 컨설턴트 신청이 가능합니다.
          <br />
          온룸에서 나만의 컨설팅을 직접 진행해 보세요.
        </Banner4Text2>
        <BannerButton className="">컨설턴트 신청하기</BannerButton>
      </Container>
      <Container direction={'right'} width={'100%'}>
        <BannerImg
          src={process.env.PUBLIC_URL + 'img/home/배너이미지.jpg'}
        ></BannerImg>
      </Container>
    </Container>
  </StyledBanner2>
);
