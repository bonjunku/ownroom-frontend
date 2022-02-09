import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import { useAppDispatch, useAppSelect } from '../../store/configureStore.hooks';
import {
  fetchPortfolioAsync,
  fetchPortfolioByIdAsync,
  getPortfolioConcept,
} from '../../store/modules/portfolio';
import { getUserInfo } from '../../store/modules/user';
import { Button } from '../../common/button';
import { Container } from '../../common/container';
import { DecoratedContainer } from '../../common/decoratedContainer';
import { StyledLink } from '../../common/link';
import { Text } from '../../common/text';
import PortfolioInterface from '../consultantPortfolio/components/portfolioList';

export const PortfolioDetail = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isConsultant } = useAppSelect(getUserInfo);
  const [portfolio, setPortfolio] = useState<PortfolioInterface>();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPortfolioByIdAsync(id)).then((data) => {
      setPortfolio(data.payload);
    });
  }, []);
  const onClick = (
    nickname: string | undefined,
    possibleNumber: number | undefined
  ) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용이 가능한 서비스입니다.');
      navigate('/login');
    } else if (isConsultant) {
      alert(
        '컨설팅 신청은 고객만 가능합니다.\n마이페이지에서 고객으로 전환해주세요.'
      );
    } else if (possibleNumber == 0) {
      alert('해당 서비스는 모집이 마감되었습니다.');
    } else if (possibleNumber && possibleNumber > 0)
      navigate(`/consulting/application/${nickname}`);
  };

  return (
    <>
      <Container height="300px" style={PortfolioHeaderCSS}>
        <Container width="1136px" position="relative">
          <Text className="KRDisplay-2 gray001" style={PortfolioTitleCSS}>
            {portfolio?.title}
          </Text>
          <Container
            style={PortfolioHeaderTextContainerCSS}
            height="28px"
            justifyContent="left"
          >
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText1CSS}>
              공간
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText2CSS}
            >
              {portfolio?.numberOfRooms}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText3CSS}>
              평수
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText4CSS}
            >
              {portfolio?.floorSpace}평
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText5CSS}>
              스타일
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText6CSS}
            >
              {portfolio?.concept}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText7CSS}>
              범위
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText8CSS}
            >
              {portfolio?.consultingRange}
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText9CSS}>
              총금액
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText10CSS}
            >
              {Number(portfolio?.budget) / 10000 + '만원'}
            </Text>
          </Container>
        </Container>
        <Container
          width="1136px"
          height="222px"
          style={PortfolioConsultantContainerCSS}
        >
          <Container
            style={PortfolioConsultantContainerDecoratorCSS}
            height="12px"
          ></Container>
          <Text
            className="KRHeadline-1 gray001"
            style={PortfolioConsultantIdCSS}
          >
            {portfolio?.user.nickname}
          </Text>
          <Text className="KRBody-2 gray002" style={PortfolioCostCSS}>
            평당 {Number(portfolio?.pricePerUnit) / 10000}만원
          </Text>
          <Text className="KRHeadline-2 orange001" style={PortfolioCapacityCSS}>
            {portfolio?.numberOfPossibleConsulting}명 가능
          </Text>
          <Container style={PortfolioConsultantInfoCSS}>
            <Text className="KRBody-2 gray001">{portfolio?.introduction}</Text>
          </Container>

          <Button
            width="92px"
            height="32px"
            style={PortfolioConsultantButtonCSS}
            isActive={portfolio?.numberOfPossibleConsulting !== 0}
            onClick={() => {
              onClick(
                portfolio?.user.nickname,
                portfolio?.numberOfPossibleConsulting
              );
            }}
          >
            <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
          </Button>
        </Container>
      </Container>
      <Container height="128.4px" style={PortfolioBodyContainerCSS}></Container>
      <Container style={PortfolioBodyContainerCSS}>
        <Container
          className="KRBody-2 gray001"
          width="1136px"
          style={PortfolioBodyCSS}
          justifyContent="start"
          alignItems="start"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'right',
            }}
          >
            {portfolio?.images?.map((element) => {
              return (
                <React.Fragment key={element.id}>
                  <img src={element?.url} style={{ width: '830px' }}></img>
                  <br />
                </React.Fragment>
              );
            })}

            {portfolio?.description}
          </div>
        </Container>
      </Container>
    </>
  );
};

const PortfolioHeaderCSS: CSSProperties = {
  backgroundColor: 'var(--brand-yellow-001)',
};
const PortfolioTitleCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '76px',
};
const PortfolioHeaderTextContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '130px',
};

const PortfolioHeaderText1CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText2CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText3CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText4CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText5CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText6CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText7CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText8CSS: CSSProperties = {
  marginRight: '30px',
};
const PortfolioHeaderText9CSS: CSSProperties = {
  marginRight: '10px',
};
const PortfolioHeaderText10CSS: CSSProperties = {
  marginRight: '30px',
};

const PortfolioConsultantContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '287px',
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
};

const PortfolioConsultantContainerDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  backgroundColor: 'var(--brand-orange-003)',
};

const PortfolioConsultantIdCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '41px',
};

const PortfolioCostCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '75px',
};
const PortfolioCapacityCSS: CSSProperties = {
  position: 'absolute',
  left: '127px',
  top: '75.4px',
};

const PortfolioConsultantInfoCSS: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '127.4px',
  width: '850px',
  height: '64px',
};

const PortfolioConsultantButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '46px',
  right: '42.5px',
  borderRadius: '3px',
};

const PortfolioBodyContainerCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};

const PortfolioBodyCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
  padding: '64px 145px',
};
