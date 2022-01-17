import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Container } from './container';
import { Img } from './img';
import { StyledLink } from './link';
import { Text } from './text';

export const Navbar = () => {
  return (
    <Container height="80px" position="fixed" style={navbarCSS}>
      <Container width="1920px">
        <Container width="1136px" position="relative">
          <StyledLink to="/" style={logoCSS}>
            <Img
              src={process.env.PUBLIC_URL + '/img/home/logo_symbol.png'}
              width="100px"
              height="27.1px"
            />
          </StyledLink>
          <Consultant style={consultantCSS}>
            <Text className="KRHeadline-2 gray002">컨설턴트</Text>
            <SubConsultant>
              <StyledLink to="/portfolioList" style={subconsultantCSS}>
                <Text className="KRHeadline-3 gray003">
                  포트폴리오 둘러보기
                </Text>
              </StyledLink>
              <StyledLink to="/application/consultant">
                <Text className="KRHeadline-3 gray003">컨설턴트 신청하기</Text>
              </StyledLink>
            </SubConsultant>
          </Consultant>
          <StyledLink to="/mypage" style={login2CSS}>
            <Text className="KRHeadline-2 gray002">마이컨설팅</Text>
          </StyledLink>
          <StyledLink to="/login" style={loginCSS}>
            <Text className="KRHeadline-2 gray002">로그인</Text>
          </StyledLink>
        </Container>
      </Container>
    </Container>
  );
};

const navbarCSS: CSSProperties = {
  zIndex: 1,
  backgroundColor: 'var(--gray-white)',
};

const Consultant = styled.div`
  display: flex;
`;

const consultantCSS: CSSProperties = {
  position: 'absolute',
  left: '145px',
};

const SubConsultant = styled.div`
  margin-left: 24px;
  border-left: 2px solid #aaaaad;
  padding-left: 24px;
  ${Consultant}:not(:hover) & {
    display: none;
  }
`;

const subconsultantCSS: CSSProperties = {
  marginRight: '33px',
};

const logoCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
};

const loginCSS: CSSProperties = {
  position: 'absolute',
  right: 0,
};

const login2CSS: CSSProperties = {
  position: 'absolute',
  right: '100px',
};
