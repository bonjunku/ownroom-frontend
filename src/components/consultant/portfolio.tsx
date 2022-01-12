import styled, { CSSProperties } from 'styled-components';
import { Container } from '../@shared/container';
import { Text } from '../@shared/text';
import { StyledLink } from '../@shared/link';
import { wrap } from 'cheerio/lib/api/manipulation';
import { Img } from '../@shared/img';
import { Button } from '../@shared/buttons';

export const Portfolio = () => {
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
    </Container>
  );
};

const PortfolioNavbar = styled.div`
  width: 362px;
  display: flex;
  justify-content: space-between;
`;

const PortfolioItemContainerCSS: CSSProperties = {
  paddingTop: '40px',
  flexWrap: 'wrap',
};

export const PortfolioItem = () => {
  return (
    <StyledPortfolioItem>
      <PortfolioThumbnailContainer>
        <PortfolioThumbnail
          src={process.env.PUBLIC_URL + 'img/home/home6.jpg'}
        ></PortfolioThumbnail>
      </PortfolioThumbnailContainer>
      <Text className="KRHeadline-1 gray001">
        원룸에서도 느낄 수 있는 유러피안 감성
      </Text>
      <DividingLine />
      <Text className="KRHeadline-1 gray001" style={PortfolioInfo1CSS}>
        hsummi
      </Text>
      <Text className="KRBody-3 gray002" style={PortfolioInfo2CSS}>
        평당 3만원
      </Text>
      <Text className="KRBody-3 orange001">3명 가능</Text>
      <Text className="KRBody-3 gray001" style={PortfolioBodyCSS}>
        이곳에 보이는 최대 글자 공백포함 66자입니다 이곳에 보<br />
        이는 최대 글자 공백포함 66자입니다 이곳에 보이는 글...
      </Text>
      <Button width="97px" height="33px" top="310px" right="0">
        <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
      </Button>
    </StyledPortfolioItem>
  );
};

const StyledPortfolioItem = styled.div`
  width: 360px;
  height: 481px;
  /* border: 1px red solid; */
  position: relative;
  margin: auto;
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

const PortfolioInfo1CSS: CSSProperties = {
  marginRight: '13px',
};
const PortfolioInfo2CSS: CSSProperties = {
  marginRight: '10px',
};

const PortfolioBodyCSS: CSSProperties = {
  marginTop: '5px',
};

const DividingLine = styled.div`
  width: 360px;
  height: 1px;
  background-color: var(--gray-gray-004);
  margin-top: 8px;
  margin-bottom: 11px;
`;
