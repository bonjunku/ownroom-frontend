import { CSSProperties } from 'styled-components';
import { Container } from '../../../common/container';
import { Text } from '../../../common/Text';

export const ConsultantTitle = () => {
  return (
    <Container height="116px">
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
  top: '60px',
};
