import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './container';

export const StyledImg = styled.img`
  height: 30.4px;
`;
export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: var(--gray-white);
`;
export const RelativeBoundary = styled.nav`
  position: relative;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  ${({ color }) => {
    return `color:${color}`;
  }}
`;

const Consultant = styled.div`
  display: flex;
  color: var(--gray-gray-002);
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;
`;
const SubConsultant = styled.div`
  ${Consultant}:not(:hover) & {
    display: none;
  }
`;
export const Navbar = () => {
  return (
    <StyledNavbar>
      <RelativeBoundary>
        <Container width={'1440px'} height={'80px'} option="align-items:center">
          <Container option="margin-right:60px">
            <StyledLink to={'/'}>
              <StyledImg
                src={process.env.PUBLIC_URL + 'img/home/logo_symbol.png'}
              />
            </StyledLink>
          </Container>
          <Consultant>
            <Container option="margin-right:21px">컨설턴트</Container>
            <SubConsultant>
              <Container>
                <Container option="padding-left:20px; border-left: 2px solid var(--gray-gray-003)">
                  <StyledLink to={'/menu1'} color="var(--gray-gray-003)">
                    포트폴리오 둘러보기
                  </StyledLink>
                </Container>
                <Container option="padding-left:22px;">
                  <StyledLink to={'/menu1'} color="var(--gray-gray-003)">
                    컨설턴트 신청하기
                  </StyledLink>
                </Container>
              </Container>
            </SubConsultant>
          </Consultant>
          <Container
            option=" 
         position:absolute;
         right:100px;
          right:25px;
          color: var(--gray-gray-002);
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.8;"
          >
            <StyledLink to={'/menu1'} color="var(--gray-gray-002)">
              로그인
            </StyledLink>
          </Container>
        </Container>
      </RelativeBoundary>
    </StyledNavbar>
  );
};
