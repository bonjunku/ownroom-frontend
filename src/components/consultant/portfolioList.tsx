import styled, { CSSProperties } from 'styled-components';
import { Container } from '../@shared/container';
import { Text } from '../@shared/text';
import { StyledLink } from '../@shared/link';
import { Img } from '../@shared/img';
import { Button } from '../@shared/button';
import { buildQueries } from '@testing-library/react';
import { useAppDispatch, useAppSelect } from '../../store/configureStore.hooks';
import portfolio, {
  fetchPortfolioAsync,
  getPortfolioConcept,
} from '../../store/modules/portfolio';
import { MouseEvent, useEffect, useState } from 'react';

type Image = {
  id: number;
  url: string;
};
export default interface Portfolio {
  budget: number;
  concept: string;
  consultingRange: string;
  description: string;
  floorSpace: number;
  id: number;
  images: Image[];
  introduction: string;
  numberOfRooms: string;
  pricePerUnit: number;
  title: string;
  user: { nickname: string };
  numberOfPossibleConsulting: number;
}

interface PortfolioNavBarClicked {
  Modern: boolean;
  Minimal: boolean;
  Natural: boolean;
  Antique: boolean;
  NorthEurope: boolean;
}
const portfolioNavBarMap = {
  Modern: '모던',
  Minimal: '미니멀',
  Natural: '내츄럴',
  Antique: '앤틱',
  NortEurope: '북유럽',
};

export const PortfolioList = () => {
  const [portfolioListResult, setPortfolioListResult] = useState<Portfolio[]>();
  const initialPortfolioNavBarClicked = {
    Modern: false,
    Minimal: false,
    Natural: false,
    Antique: false,
    NorthEurope: false,
  };

  const [portfolioNavBarClicked, setPortfolioNavBarClicked] =
    useState<PortfolioNavBarClicked>({
      Modern: true,
      Minimal: false,
      Natural: false,
      Antique: false,
      NorthEurope: false,
    });

  const dispatch = useAppDispatch();
  const concept = useAppSelect(getPortfolioConcept);

  const convertConcept = (event: MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.id);
    dispatch({
      type: 'portfolio/CONVERT_CONCEPT',
      payload: event.currentTarget.id,
    });

    setPortfolioNavBarClicked({
      ...initialPortfolioNavBarClicked,
      [event.currentTarget.id]: true,
    });
  };
  useEffect(() => {
    dispatch({
      type: 'portfolio/CONVERT_CONCEPT',
      payload: 'Modern',
    });
  }, []);

  useEffect(() => {
    dispatch(fetchPortfolioAsync(concept)).then((data) => {
      setPortfolioListResult(data.payload);
    });
  }, [concept]);
  return (
    <Container type="column">
      <Container width="1920px">
        <Container width="1136px" justifyContent="left">
          <PortfolioNavbar>
            {Object.keys(portfolioNavBarMap).map((element) => {
              if (portfolioNavBarClicked[element])
                return (
                  <Text
                    id={element}
                    className="KRHeadline-1 orange001"
                    onClick={(event: MouseEvent<HTMLElement>) => {
                      convertConcept(event);
                    }}
                    style={PortfolioNavbarCSS}
                  >
                    {portfolioNavBarMap[element]}
                  </Text>
                );
              else
                return (
                  <Text
                    id={element}
                    className="KRHeadline-1 gray002"
                    onClick={(event: MouseEvent<HTMLElement>) => {
                      convertConcept(event);
                    }}
                    style={PortfolioNavbarCSS}
                  >
                    {portfolioNavBarMap[element]}
                  </Text>
                );
            })}
          </PortfolioNavbar>
        </Container>
      </Container>
      <Container width="1920px">
        <Container
          width="1136px"
          justifyContent="left"
          style={PortfolioItemContainerCSS}
        >
          {portfolioListResult &&
            Object.keys(portfolioListResult).map((element) => (
              <PortfolioItem {...portfolioListResult[element]}></PortfolioItem>
            ))}
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

export const PortfolioItem: React.FunctionComponent<Portfolio> = (
  portfolio: Portfolio
) => {
  return (
    <StyledLink to={`/portfolio/${portfolio.id}`} style={StyledLinkCSS}>
      <StyledPortfolioItem>
        <PortfolioThumbnailContainer>
          <PortfolioThumbnail
            src={process.env.PUBLIC_URL + '/img/home/home6.jpg'}
          ></PortfolioThumbnail>
        </PortfolioThumbnailContainer>
        <Text className="KRHeadline-1 gray001" style={PortfolioTitleCSS}>
          {portfolio.title.length > 25
            ? portfolio.title.slice(0, 25) + '...'
            : portfolio.title}
        </Text>
        <DividingLine />
        <Container
          style={PortfolioInfoContainerCSS}
          height="23px"
          justifyContent="left"
        >
          <Text className="KRHeadline-2 gray001" style={PortfolioInfo1CSS}>
            {portfolio.user.nickname}
          </Text>
          <Text className="KRBody-3 gray002" style={PortfolioInfo2CSS}>
            평당 {portfolio.pricePerUnit / 10000}만원
          </Text>
          <Text className="KRBody-3 orange001" style={PortfolioInfo3CSS}>
            {portfolio.numberOfPossibleConsulting}명 가능
          </Text>
        </Container>
        <Text className="KRBody-3 gray001" style={PortfolioBodyCSS}>
          {portfolio.introduction}
        </Text>
        <StyledLink to="/application/consulting">
          <Button width="92px" height="32px" top="310px" right="5px">
            <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
          </Button>
        </StyledLink>
      </StyledPortfolioItem>
    </StyledLink>
  );
};

const StyledLinkCSS: CSSProperties = {
  marginRight: '30px',
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
const PortfolioNavbarCSS: CSSProperties = {
  cursor: 'pointer',
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
