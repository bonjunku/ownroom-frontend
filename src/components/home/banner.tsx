import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Button } from '../@shared/buttons';
import { Container } from '../@shared/container';
import { Img } from '../@shared/img';
import { Text } from '../@shared/text';

export const Banner1 = () => (
  <>
    <Container height="600px" style={Banner1BackgroundCSS}>
      <Container width="1920px" position="relative">
        <Img
          width="1920px"
          src={process.env.PUBLIC_URL + 'img/home/home1.jpg'}
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
  top: '200px',
  left: 0,
};
const Banner1Text3CSS: CSSProperties = {
  position: 'absolute',
  top: '238px',
  left: 0,
};

export const Banner2 = () => (
  <Container height="480px">
    <Container width="1920px" position="relative">
      <Container width="1136px" position="absolute">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home3.jpg'}
          width="600px"
          height="340px"
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
  top: '126px',
  left: 0,
};

const Banner2Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '258px',
  left: 0,
};

export const Banner3 = () => (
  <Container height="480px" style={Banner3BackgroundCSS}>
    <Container width="1920px" position="relative">
      <Container width="1136px" position="absolute">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home4.jpg'}
          width="600px"
          height="340px"
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
  top: '126px',
  right: '79px',
};

const Banner3Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '258px',
  right: '13px',
};

export const Banner4 = () => (
  <Container height="480px">
    <Container width="1920px" position="relative">
      <Container width="1136px" position="absolute">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home2.jpg'}
          width="600px"
          height="340px"
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
        <Button width="119px" height="44px" top="343px" left="0">
          <Text className="KRHeadline-2 graywhite">컨설턴트 신청하기</Text>
        </Button>
      </Container>
    </Container>
  </Container>
);

const Banner4ImgCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
};

const Banner4Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '83px',
  left: 0,
};

const Banner4Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '215px',
  left: 0,
};

export const Banner5 = () => (
  <Container height="466px">
    <Container width="1920px">
      <Img
        src={process.env.PUBLIC_URL + 'img/home/home5.jpg'}
        height="466px"
      ></Img>
    </Container>
  </Container>
);

export const Banner6 = () => (
  <Container type="column">
    <Container height="60px"></Container>
    <Container width="1920px">
      <Img
        src={process.env.PUBLIC_URL + 'img/home/home6.jpg'}
        height="660px"
      ></Img>
    </Container>
  </Container>
);
