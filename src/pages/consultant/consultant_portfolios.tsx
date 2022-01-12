import { Container } from '../../components/@shared/container';
import { Img } from '../../components/@shared/img';
import { Portfolio } from '../../components/consultant/portfolio';
import { Text } from '../../components/@shared/text';
import { CSSProperties } from 'styled-components';

export const ConsultantPortfolios = () => {
  return (
    <>
      <Container height="80px" />
      <Container height="300px" position="relative">
        <Img
          src={
            process.env.PUBLIC_URL + '/img/consultant/consultantportfolio.jpg'
          }
        />
        <Text
          style={ConsultantPortfoliosText1CSS}
          className="ENHeadline1 gray001"
        >
          Consultant Portfolio
        </Text>
        <Text style={ConsultantPortfoliosText2CSS} className="gray001">
          다양한 컨설턴트의 포트폴리오를 둘러보세요.
        </Text>
      </Container>
      <Container height="50px" />
      <Portfolio></Portfolio>
    </>
  );
};

const ConsultantPortfoliosText1CSS: CSSProperties = {
  position: 'absolute',
  top: '104px',
};

const ConsultantPortfoliosText2CSS: CSSProperties = {
  position: 'absolute',
  top: '164px',
};
