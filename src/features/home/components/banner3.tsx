import { CSSProperties } from 'react';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { Text } from '../../../common/Text';

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
