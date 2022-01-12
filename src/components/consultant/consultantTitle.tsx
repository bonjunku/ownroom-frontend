import { CSSProperties } from 'styled-components';
import { Container } from '../../components/@shared/container';
import { Text } from '../../components/@shared/text';

export const ConsultantTitle = () => {
  return (
    <Container height="146px">
      <Container width="1920px">
        <Container width="1136px" position="relative">
          <Text className="KRDisplay-2 gray001" style={ConsultantTitleCSS}>
            컨설턴트
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

const ConsultantTitleCSS: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: '80px',
};
