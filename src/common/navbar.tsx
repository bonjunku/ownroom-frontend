import React, { useEffect, useLayoutEffect } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { useAppSelect } from '../store/configureStore.hooks';
import {
  fetchMyInfoAsync,
  getCookie,
  getIsLoggedIn,
  getNickName,
  getUserInfo,
  setCookie,
} from '../store/modules/user';
import { Container } from './container';
import { Img } from './img';
import { StyledLink } from './link';
import { Text } from './Text';

import { useDispatch } from 'react-redux';
import { icon_profile } from '../static/images/svg';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = useAppSelect(getUserInfo);
  const isLoggedin = useAppSelect(getIsLoggedIn);
  const dispatch = useDispatch();
  const nickname = useAppSelect(getNickName);
  useLayoutEffect(() => {
    if (isLoggedin) dispatch(fetchMyInfoAsync());
  }, [isLoggedin]);

  const handleClickConsultantPortfolio = () => {
    navigate('/consultantPortfolio');
  };

  const handleClickConsultantApplication = () => {
    if (!isLoggedin) {
      alert('로그인 후 이용이 가능한 서비스입니다.');
      navigate('/login');
    } else if (userInfo.consultantRegisterStatus === '승인 완료') {
      alert('이미 컨설턴트 승인이 완료되었습니다.');
    } else {
      navigate('/consultant/application');
    }
  };
  return (
    <>
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
                <DividingLine />
                <ConsultantPortfolio
                  className="KRHeadline-3 gray003"
                  onClick={handleClickConsultantPortfolio}
                >
                  포트폴리오 둘러보기
                  <Underline1 />
                </ConsultantPortfolio>

                <ConsultantApplication
                  className="KRHeadline-3 gray003"
                  onClick={handleClickConsultantApplication}
                >
                  컨설턴트 신청하기
                  <Underline2 />
                </ConsultantApplication>
              </SubConsultant>
            </Consultant>

            {isLoggedin ? (
              <StyledLink to="/mypage" style={myPageLinkCSS}>
                <Img src={icon_profile} width="30px" height="30px"></Img>
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
      <Container height="80px" />
    </>
  );
};

const navbarCSS: CSSProperties = {
  zIndex: 1,
  backgroundColor: 'var(--gray-white)',
};

const Consultant = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const consultantCSS: CSSProperties = {
  position: 'absolute',
  left: '125px',
  padding: '0 20px 0 20px',
};

const SubConsultant = styled.div`
  margin-left: 40px;
  padding-left: 0px;
  ${Consultant}:not(:hover) & {
    display: none;
  }
  height: 100%;
  display: flex;
  align-items: center;
`;

const DividingLine = styled.div`
  position: absolute;
  left: 101px;
  width: 2px;
  height: 25px;
  background-color: var(--gray-gray-003);
`;

const ConsultantPortfolio = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  margin-right: 13px;
`;

const ConsultantApplication = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
  margin-right: 13px;
`;

const Underline1 = styled.div`
  background-color: var(--gray-gray-004);
  height: 4px;
  position: absolute;
  left: 50%;
  top: 40px;
  width: 0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  ${ConsultantPortfolio}:hover & {
    width: 100%;
    left: 0;
  }
`;
const Underline2 = styled.div`
  background-color: var(--gray-gray-004);
  height: 4px;
  position: absolute;
  left: 50%;
  top: 40px;
  width: 0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  ${ConsultantApplication}:hover & {
    width: 100%;
    left: 0;
  }
`;

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
