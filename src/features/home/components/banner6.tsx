import { CSSProperties } from 'react';
import { Container } from '../../../common/container';
import { Img } from '../../../common/img';
import { Text } from '../../../common/text';

export const Banner6 = () => (
  <Container type="column" position="relative">
    <Container height="60px"></Container>
    <Container width="1920px" position="relative">
      <Img
        src={process.env.PUBLIC_URL + 'img/home/home6.png'}
        height="660px"
        style={Banner6Img1CSS}
      ></Img>
      <Container width="1136px" height="660px" justifyContent="space-between">
        <div style={Banner6WindowContainerCSS}>
          <Img
            src={process.env.PUBLIC_URL + 'img/home/home6window1.png'}
            width={'340px'}
            height={'467px'}
          />
          <Text style={Banner6WindowText1CSS}>Step 1</Text>
          <Text style={Banner6WindowText2CSS}>
            원하는 스타일의
            <br />
            컨설턴트를 선택해요.
          </Text>
        </div>
        <div style={Banner6WindowContainerCSS}>
          <Img
            src={process.env.PUBLIC_URL + 'img/home/home6window1.png'}
            width={'340px'}
            height={'467px'}
          />
          <Text style={Banner6WindowText1CSS}>Step 2</Text>
          <Text style={Banner6WindowText2CSS}>
            내 방을 바꿔줄
            <br />
            컨설팅 신청서를 작성해요.
          </Text>
        </div>
        <div style={Banner6WindowContainerCSS}>
          <Img
            src={process.env.PUBLIC_URL + 'img/home/home6window1.png'}
            width={'340px'}
            height={'467px'}
          />
          <Text style={Banner6WindowText1CSS}>Step 3</Text>
          <Text style={Banner6WindowText2CSS}>
            컨설팅 보고서를 확인하고
            <br />
            나만의 공간을 완성해보아요.
          </Text>
        </div>
      </Container>
    </Container>
  </Container>
);

const Banner6Img1CSS: CSSProperties = {
  zIndex: -1,
  position: 'absolute',
};

const Banner6WindowContainerCSS: CSSProperties = {
  width: '340px',
  height: '467px',
  position: 'relative',
};

const Banner6WindowText1CSS: CSSProperties = {
  position: 'absolute',
  left: '20px',
  top: '339.1px',
  fontFamily: 'Taviraj',
  fontSize: '35px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'italic',
  lineHeight: '1.6',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: 'var(--gray-white)',
};
const Banner6WindowText2CSS: CSSProperties = {
  position: 'absolute',
  left: '20px',
  top: '405px',
  fontFamily: 'Noto Sans KR',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.33',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: 'var(--gray-white)',
};
