import { CSSProperties } from 'react';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { Text } from '../../../common/Text';

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
