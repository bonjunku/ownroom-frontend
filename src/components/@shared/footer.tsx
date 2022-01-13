import { CSSProperties } from 'react';
import { Container } from './container';
import { Img } from './img';
import { Text } from '../@shared/text';
import InstaIcon from '../../static/images/icon_insta.svg';
import styled from 'styled-components';

export const Footer = () => (
  <Container height="300px" style={FooterCSS}>
    <Container width="1136px" position="relative">
      <Img
        src={process.env.PUBLIC_URL + '/img/home/logo.png'}
        width="160px"
        height="66.8px"
        style={FooterLogoCSS}
      ></Img>
      <Text className="KRHeadline-3 orange001" style={FooterLogoTextCSS}>
        1인 가구를 위한
        <br />
        홈스타일링 컨설팅
        <br />
        중계 플랫폼
      </Text>
      <Text className="KRHeadline-2 gray002" style={FooterConsultantCSS}>
        컨설턴트
      </Text>
      <Text style={FooterConsultantMenuCSS}>
        포트폴리오 둘러보기
        <br />
        컨설턴트 신청하기
      </Text>

      <Text className="KRHeadline-2 gray002" style={FooterFormDownloadCSS}>
        양식 다운받기
      </Text>
      <Text style={FooterFormDownloadMenuCSS}>
        컨설턴트 전환 신청서
        <br />
        컨설팅 신청서
        <br />
        컨설팅 보고서
      </Text>
      <Img
        src={InstaIcon}
        width="18px"
        height="18px"
        style={FooterInstaIconCSS}
      ></Img>
      <FooterInstaLink></FooterInstaLink>
      <Text className="KRBody-1 orange001" style={FooterInstaLinkCSS}>
        ownroom.official
      </Text>
    </Container>
  </Container>
);

const FooterCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};

const FooterLogoCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '60.5px',
};
const FooterLogoTextCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '159px',
};
const FooterConsultantCSS: CSSProperties = {
  position: 'absolute',
  left: '290px',
  top: '56px',
};
const FooterConsultantMenuCSS: CSSProperties = {
  position: 'absolute',
  left: '290px',
  top: '102px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
};

const FooterFormDownloadCSS: CSSProperties = {
  position: 'absolute',
  top: '56px',
  left: '483px',
};

const FooterFormDownloadMenuCSS: CSSProperties = {
  position: 'absolute',
  top: '102px',
  left: '483px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
};

const FooterInstaIconCSS: CSSProperties = {
  position: `absolute`,
  right: '163px',
  top: '65px',
};

const FooterInstaLink = styled.div`
  border: 1px red solid;
  width: 155px;
  height: 32px;
  position: absolute;
  top: 56px;
  right: 0;
`;

const FooterInstaLinkCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
  top: '56px',
};
