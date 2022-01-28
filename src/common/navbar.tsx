import React, { useEffect, useLayoutEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { useAppSelect } from '../store/configureStore.hooks';
import {
  fetchMyInfoAsync,
  getCookie,
  getIsLoggedIn,
  getNickName,
  setCookie,
} from '../store/modules/user';
import { Container } from './container';
import { Img } from './img';
import { StyledLink } from './link';
import { Text } from './text';
import ProfileIcon from '../static/images/icon_profile.svg';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const isLoggedin = useAppSelect(getIsLoggedIn);
  const dispatch = useDispatch();
  const nickname = useAppSelect(getNickName);
  useLayoutEffect(() => {
    dispatch(fetchMyInfoAsync());
  }, []);

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

          {isLoggedin ? (
            <StyledLink to="/mypage" style={myPageLinkCSS}>
              <Img src={ProfileIcon} width="30px" height="30px"></Img>
              <Text className="KRHeadline-2 gray002" style={nicknameCSS}>
                {nickname}님
              </Text>
            </StyledLink>
          ) : (
            <StyledLink to="/login" style={loginCSS}>
              <Text className="KRHeadline-2 gray002">로그인</Text>
            </StyledLink>
          )}
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

const myPageLinkCSS: CSSProperties = {
  position: 'absolute',
  right: '0px',
  display: 'flex',
  alignContent: 'center',
};
const nicknameCSS: CSSProperties = {
  marginLeft: '12px',
};
