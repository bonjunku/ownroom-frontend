import { CSSProperties } from 'react';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { Text } from '../../../common/text';

export const Banner5 = () => (
  <Container height="466px">
    <Container width="1920px">
      <Img
        src={process.env.PUBLIC_URL + 'img/home/home5.png'}
        height="466px"
        style={Banner5ImgCSS}
      ></Img>
      <Container width="1191.6px" position="relative">
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home5quoteLeft.png'}
          width={'16px'}
          height={'14.2px'}
          style={Banner5quoteLeftCSS}
        ></Img>
        <Img
          src={process.env.PUBLIC_URL + 'img/home/home5quoteRight.png'}
          width={'16px'}
          height={'14.2px'}
          style={Banner5quoteRightCSS}
        ></Img>
        <div style={Banner5Text1ContainerCSS}>
          <Text className="KRDisplay-3 graywhite">
            인테리어 노하우를 가진 사람이라면
            <br />
            누구나 컨설턴트가 될 수 있습니다.
          </Text>
        </div>
        <div style={Banner5DividingLineCSS}></div>
        <Text
          className="KRHeadline-2 graywhite"
          style={Banner5Text2ContainerCSS}
        >
          자기만의 노하우, 감각적인 컨설팅, 부가적인 수익
        </Text>
      </Container>
    </Container>
  </Container>
);

const Banner5ImgCSS: CSSProperties = {
  position: 'absolute',
  zIndex: -1,
};
const Banner5quoteLeftCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '119.9px',
};
const Banner5quoteRightCSS: CSSProperties = {
  position: 'absolute',
  left: '378.6px',
  top: '160.5px',
};
const Banner5Text1ContainerCSS: CSSProperties = {
  position: 'absolute',
  left: '27.8px',
  top: '120px',
};
const Banner5Text2ContainerCSS: CSSProperties = {
  position: 'absolute',
  left: '27.8px',
  top: '299px',
};

const Banner5DividingLineCSS: CSSProperties = {
  width: '62px',
  height: '2px',
  position: 'absolute',
  left: '27.8px',
  top: '257px',
  backgroundColor: 'var(--gray-white)',
};
