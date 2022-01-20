import { CSSProperties } from 'styled-components';
import { useAppSelect } from '../../store/configureStore.hooks';
import { getPortfolioConcept } from '../../store/modules/portfolio';
import { Button } from '../@shared/button';
import { Container } from '../@shared/container';
import { DecoratedContainer } from '../@shared/decoratedContainer';
import { StyledLink } from '../@shared/link';
import { Text } from '../@shared/text';

export const Portfolio = () => {
  return (
    <>
      <Container height="300px" style={PortfolioHeaderCSS}>
        <Container width="1136px" position="relative">
          <Text className="KRDisplay-2 gray001" style={PortfolioTitleCSS}>
            원룸에서도 느낄 수 있는 유러피안 감성
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
              원룸
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText3CSS}>
              평수
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText4CSS}
            >
              6평
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText5CSS}>
              스타일
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText6CSS}
            >
              모던
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText7CSS}>
              범위
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText8CSS}
            >
              가구추천
            </Text>
            <Text className="KRBody-1 gray001" style={PortfolioHeaderText9CSS}>
              총금액
            </Text>
            <Text
              className="KRHeadline-2 gray001"
              style={PortfolioHeaderText10CSS}
            >
              100만원
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
            hsumiii
          </Text>
          <Text className="KRBody-2 gray002" style={PortfolioCostCSS}>
            평당 3만원
          </Text>
          <Text className="KRHeadline-2 orange001" style={PortfolioCapacityCSS}>
            2명 가능
          </Text>
          <Container style={PortfolioConsultantInfoCSS}>
            <Text className="KRBody-2 gray001">
              안녕하세요 컨설턴트 우민경입니다. SNS에서만 볼 수 있었던 분위기
              있는 공간을 마들어드립니다. 감각적인 홈스타일링을 통해 집을
              꾸며보고 싶다면 찾아주세요! 입력가능한 최대 글자수는 공백을
              포함하여 총 125자입니다.
            </Text>
          </Container>
          <StyledLink to="../application/consulting">
            <Button
              width="92px"
              height="32px"
              style={PortfolioConsultantButtonCSS}
            >
              <Text className="KRHeadline-3 gray007">컨설팅 신청</Text>
            </Button>
          </StyledLink>
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
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다...본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다... 본문은 여기 입력됩니다... 본문은 여기 입력됩니다...
          본문은 여기 입력됩니다... 본문은 여기 입력됩니다... 본문은 여기
          입력됩니다...
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
