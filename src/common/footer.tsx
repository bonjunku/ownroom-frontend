import { CSSProperties } from 'react';
import { Container } from './container';
import { Img } from './img';
import { Text } from './Text';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { icon_insta, logo_footer } from '../static/images/svg';
import { useAppSelect } from '../store/configureStore.hooks';
import { getUserInfo } from '../store/modules/user';

export const Footer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelect(getUserInfo);
  const handleClickConsultantPortfolio = () => {
    navigate('/consultantPortfolio');
  };
  const handleClickConsultantApplication = () => {
    if (!isLoggedIn) {
      alert('로그인 후 이용이 가능한 서비스입니다.');
      navigate('/login');
    } else {
      navigate('/consultant/application');
    }
  };

  return (
    <Container height="300px" style={FooterCSS}>
      <Container width="1136px" position="relative">
        <Img
          src={logo_footer}
          width="131px"
          height="55px"
          style={FooterLogoCSS}
        ></Img>
        <Text className="KRHeadline-3 orange001" style={FooterLogoTextCSS}>
          1인 가구를 위한
          <br />
          홈스타일링 컨설팅
          <br />
          중개 플랫폼
        </Text>
        <Text className="KRHeadline-2 gray002" style={FooterConsultantCSS}>
          컨설턴트
        </Text>

        <Text
          style={FooterConsultantMenu1CSS}
          onClick={handleClickConsultantPortfolio}
        >
          포트폴리오 둘러보기
        </Text>
        <Text
          style={FooterConsultantMenu2CSS}
          onClick={handleClickConsultantApplication}
        >
          컨설턴트 신청하기
        </Text>

        <Text className="KRHeadline-2 gray002" style={FooterFormDownloadCSS}>
          양식 다운받기
        </Text>
        <a href="/format/온룸 컨설턴트 신청서 양식.docx" download>
          <Text style={FooterFormDownloadMenu1CSS}>컨설턴트 신청서</Text>
        </a>
        <a href="/format/온룸 컨설팅 신청서 양식.docx" download>
          <Text style={FooterFormDownloadMenu2CSS}>컨설팅 신청서</Text>
        </a>
        <a href="/format/온룸 컨설팅 보고서 양식.docx" download>
          <Text style={FooterFormDownloadMenu3CSS}>컨설팅 보고서</Text>
        </a>
        <Img
          src={icon_insta}
          width="18px"
          height="18px"
          style={FooterInstaIconCSS}
        ></Img>
        <FooterInstaLink></FooterInstaLink>
        <a href="https://www.instagram.com/ownroom.official/">
          <Text className="KRBody-2 orange001" style={FooterInstaLinkCSS}>
            ownroom.official
          </Text>
        </a>
      </Container>
    </Container>
  );
};

const FooterCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};

const FooterLogoCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '60px',
};
const FooterLogoTextCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '159px',
  fontSize: '15px',
};
const FooterConsultantCSS: CSSProperties = {
  position: 'absolute',
  left: '290px',
  top: '56px',
  fontSize: '15px',
};
const FooterConsultantMenu1CSS: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  left: '290px',
  top: '102px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
  fontSize: '15px',
};

const FooterConsultantMenu2CSS: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  left: '290px',
  top: '132px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
  fontSize: '15px',
};

const FooterFormDownloadCSS: CSSProperties = {
  position: 'absolute',
  top: '56px',
  left: '483px',
  fontSize: '15px',
};

const FooterFormDownloadMenu1CSS: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '102px',
  left: '483px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
  fontSize: '15px',
};
const FooterFormDownloadMenu2CSS: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '132px',
  left: '483px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
  fontSize: '15px',
};

const FooterFormDownloadMenu3CSS: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  top: '162px',
  left: '483px',
  fontFamily: 'Noto Sans KR',
  lineHeight: '30px',
  color: 'var(--gray-gray-002)',
  fontSize: '15px',
};

const FooterInstaIconCSS: CSSProperties = {
  position: `absolute`,
  right: '126px',
  top: '65px',
};

const FooterInstaLink = styled.div`
  width: 184px;
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
