import styled, { CSSProperties } from 'styled-components';
import { Container } from '../@shared/container';
import { Text } from '../@shared/text';
import { StyledLink } from '../@shared/link';
import { Img } from '../@shared/img';
import { Button } from '../@shared/button';
import { buildQueries } from '@testing-library/react';

export const PortfolioList = () => {
  return (
    <Container type="column">
      <Container width="1920px">
        <Container width="1136px" justifyContent="left">
          <PortfolioNavbar className="KRHeadline-1 gray002">
            <Text>모던</Text>
            <Text>미니멀</Text>
            <Text>내츄럴</Text>
            <Text>앤틱</Text>
            <Text>북유럽</Text>
          </PortfolioNavbar>
        </Container>
      </Container>
      <Container width="1920px">
        <Container
          width="1136px"
          justifyContent="space-between"
          style={PortfolioItemContainerCSS}
        >
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </Container>
      </Container>
      <Container height="20px" />
    </Container>
  );
};

const PortfolioNavbar = styled.div`
  width: 362px;
  display: flex;
  justify-content: space-between;
`;

const PortfolioItemContainerCSS: CSSProperties = {
  paddingTop: '46px',
  flexWrap: 'wrap',
};

export const PortfolioItem = () => {
  return (
    <StyledLink to={'/portfolio/id'}>
      <StyledPortfolioItem>
        <PortfolioThumbnailContainer>
          <PortfolioThumbnail
            src={process.env.PUBLIC_URL + '/img/home/home6.jpg'}
          ></PortfolioThumbnail>
        </PortfolioThumbnailContainer>
        <Text className="KRHeadline-1 gray001" style={PortfolioTitleCSS}>
          원룸에서도 느낄 수 있는 유러피안 감성
        </Text>
        <DividingLine />
        <Container
          style={PortfolioInfoContainerCSS}
          height="23px"
          justifyContent="left"
        >
          <Text className="KRHeadline-2 gray001" style={PortfolioInfo1CSS}>
            hsummi
          </Text>
          <Text className="KRBody-3 gray002" style={PortfolioInfo2CSS}>
            평당 3만원
          </Text>
          <Text className="KRBody-3 orange001" style={PortfolioInfo3CSS}>
            3명 가능
          </Text>
        </Container>
        <Text className="KRBody-3 gray001" style={PortfolioBodyCSS}>
          이 곳에 보이는 글자는 공백 포함 77자입니다. 이 곳에 보이는 글자는 공백
          포함 77자입니다. 이 곳에 보이는 글자는 공백 포함77자입니...
        </Text>
        <StyledLink to="/login">
          <Button width="92px" height="32px" top="310px" right="5px">
            <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
          </Button>
        </StyledLink>
      </StyledPortfolioItem>
    </StyledLink>
  );
};

const StyledPortfolioItem = styled.div`
  width: 360px;
  height: 478px;

  position: relative;
`;

const PortfolioThumbnail = styled.img``;
const PortfolioThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 240px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 22px;
`;

const PortfolioTitleCSS: CSSProperties = {
  position: 'absolute',
  top: '262px',
  left: 0,
};

const PortfolioInfoContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '313px',
  left: 0,
};
const PortfolioInfo1CSS: CSSProperties = {
  position: 'relative',
  marginRight: '16px',
};
const PortfolioInfo2CSS: CSSProperties = {
  marginRight: '14px',
};
const PortfolioInfo3CSS: CSSProperties = {};

const PortfolioBodyCSS: CSSProperties = {
  position: 'absolute',
  top: '348px',
};

const DividingLine = styled.div`
  position: absolute;
  top: 299px;
  width: 360px;
  height: 1px;
  background-color: var(--gray-gray-004);
`;
