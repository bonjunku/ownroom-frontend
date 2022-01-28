import { CSSProperties } from 'react';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { Text } from '../../../common/text';

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
