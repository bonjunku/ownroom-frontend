import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Button } from '../@shared/button';
import { Container } from '../@shared/container';
import { Img } from '../@shared/img';
import { Text } from '../@shared/text';

export const Banner1 = () => (
  <>
    <Container height="440px" style={Banner1BackgroundCSS}>
      <Container width="1920px" position="relative">
        <Img
          width="1920px"
          height="600px"
          src={process.env.PUBLIC_URL + 'img/home/home1.png'}
          style={Banner1ImgCSS}
        />
        <Container width="1136px" position="absolute">
          <Text className="ENHeadline-0 graywhite" style={Banner1Text1CSS}>
            Home styling with ownroom
          </Text>
          <Text className="KRBody-1 graywhite" style={Banner1Text2CSS}>
            누구나 나다운 집에 살 수 있도록
          </Text>
          <Text className="ENBody-1 graywhite" style={Banner1Text3CSS}>
            Make your own room
          </Text>
        </Container>
      </Container>
    </Container>
  </>
);

const Banner1BackgroundCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};

const Banner1ImgCSS: CSSProperties = {
  position: 'absolute',
};

const Banner1Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '58px',
  left: 0,
};
const Banner1Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '181px',
  left: 0,
};
const Banner1Text3CSS: CSSProperties = {
  position: 'absolute',
  top: '217px',
  left: 0,
  fontStyle: 'normal',
};

export const Banner2 = () => (
  <Container height="420px">
    <Container width="1920px" position="relative">
      <Container width="1016px" position="absolute">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home2.png'}
          width="550px"
          height="320px"
          style={Banner2ImgCSS}
        />
        <Text className="KRDisplay-2 orange001" style={Banner2Text1CSS}>
          1인 가구에게 알맞은
          <br />
          일대일 인테리어 컨설팅 서비스
        </Text>
        <Text className="KRBody-2 gray002" style={Banner2Text2CSS}>
          부담이 적은 무시공만으로 나만의 공간을 바꿔보세요.
          <br />
          각자의 방에서 더 의미 있는 시간을 보낼 수 있도록
          <br />
          온룸은 맞춤형 인테리어 기회를 제공합니다.
        </Text>
      </Container>
    </Container>
  </Container>
);

const Banner2ImgCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
};

const Banner2Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '107px',
  left: 0,
};

const Banner2Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '223px',
  left: 0,
};

export const Banner3 = () => (
  <Container height="420px" style={Banner3BackgroundCSS}>
    <Container width="1920px" position="relative">
      <Container width="1016px" position="absolute">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home3.png'}
          width="550px"
          height="320px"
          style={Banner3ImgCSS}
        />
        <Text className="KRDisplay-2 orange001" style={Banner3Text1CSS}>
          내가 원하는 스타일의
          <br />
          컨설턴트를 골라보세요.
        </Text>
        <Text className="KRBody-2 gray002" style={Banner3Text2CSS}>
          온룸은 내가 원하는 컨설턴트를 직접 선택할 수 있어요. <br />
          다양한 스타일의 포트폴리오를 확인한 후 내가 선택한
          <br /> 컨설턴트와 함께 나만의 공간을 꾸며보세요!
        </Text>
      </Container>
    </Container>
  </Container>
);

const Banner3BackgroundCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};

const Banner3ImgCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
};

const Banner3Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '107px',
  right: '101px',
};

const Banner3Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '223px',
  right: '43px',
};

export const Banner4 = () => (
  <Container height="420px" style={BackGroundColorCSS}>
    <Container width="1920px" position="relative" style={BackGroundColorCSS}>
      <Container width="1016px" position="absolute" style={BackGroundColorCSS}>
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home4.png'}
          width="550px"
          height="320px"
          style={Banner4ImgCSS}
        />
        <Text className="KRDisplay-2 orange001" style={Banner4Text1CSS}>
          누구나 컨설턴트가 <br />될 수 있습니다.
        </Text>
        <Text className="KRBody-2 gray002" style={Banner4Text2CSS}>
          인테리어에 관심이 많고 자신만의 노하우가 있다면 <br />
          누구나 컨설턴트 신청이 가능합니다.
          <br /> 온룸에서 나만의 컨설팅을 직접 진행해 보세요.
        </Text>
        <Button width="146px" height="44px" top="305px" left="0">
          <Text className="KRHeadline-2 graywhite">컨설턴트 신청하기</Text>
        </Button>
      </Container>
    </Container>
  </Container>
);

const BackGroundColorCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};

const Banner4ImgCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
};

const Banner4Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '71px',
  left: 0,
};

const Banner4Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '181px',
  left: 0,
};

export const Banner5 = () => (
  <Container height="466px">
    <Container width="1920px">
      <Img
        src={process.env.PUBLIC_URL + 'img/home/home5.png'}
        width="1920px"
        height="466px"
        style={Banner5ImgCSS}
      ></Img>
      <Container width="1191.6px"></Container>
    </Container>
  </Container>
);

const Banner5ImgCSS: CSSProperties = {
  position: 'absolute',
  zIndex: -1,
};

export const Banner6 = () => (
  <Container type="column">
    <Container height="60px">
      <Container width="1920px">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home6.png'}
          height="660px"
        ></Img>
      </Container>
    </Container>
  </Container>
);
