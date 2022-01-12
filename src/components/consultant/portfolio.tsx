import { CSSProperties } from 'styled-components';
import { Container } from '../../components/@shared/container';
import { Text } from '../../components/@shared/text';
import { StyledLink } from '../@shared/link';

export const Portfolio = () => {
  return (
    <Container type="column">
      <Container width="1920px">
        <Container width="1136px" justifyContent="left">
          <Container
            width="362px"
            justifyContent="space-between"
            className="KRHeadline-1 gray002"
          >
            <Text>모던</Text>
            <Text>미니멀</Text>
            <Text>내츄럴</Text>
            <Text>앤틱</Text>
            <Text>북유럽</Text>
          </Container>
        </Container>
      </Container>
      <Container width="1920px">
        <Container width="1136px">내용없음</Container>
      </Container>
    </Container>
  );
};
