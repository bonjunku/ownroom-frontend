import { Container } from '../../components/@shared/container';
import { Img } from '../../components/@shared/img';
import { PortfolioList } from '../../components/consultant/portfolioList';
import { Text } from '../../components/@shared/text';
import { CSSProperties } from 'styled-components';

export const ConsultantPortfolio = () => {
  return (
    <>
      <Container height="300px" position="relative">
        <Img
          src={
            process.env.PUBLIC_URL + '/img/consultant/consultantportfolio.jpg'
          }
        />
        <Text
          style={ConsultantPortfolioText1CSS}
          className="ENHeadline-1 gray001"
        >
          Consultant Portfolio
        </Text>
        <Text style={ConsultantPortfolioText2CSS} className="KRBody-2 gray001">
          다양한 컨설턴트의 포트폴리오를 둘러보세요.
        </Text>
      </Container>
      <Container height="50px" />
      <PortfolioList></PortfolioList>
    </>
  );
};

const ConsultantPortfolioText1CSS: CSSProperties = {
  position: 'absolute',
  top: '104px',
};

const ConsultantPortfolioText2CSS: CSSProperties = {
  position: 'absolute',
  top: '164px',
};
