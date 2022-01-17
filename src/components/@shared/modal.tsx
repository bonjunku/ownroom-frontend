import styled, { CSSProperties } from 'styled-components';
import { Container } from './container';
import { Img } from './img';
import Success from '../../static/images/icon_success.svg';
import { Text } from './text';

export const Modal = () => {
  return (
    <ModalBackground>
      <Container width="470px" height="300px" style={ModalWindow}>
        <Img src={Success} width="88px" height="88px" style={ModalImgCSS}></Img>
        <Text className="KRDisplay-3 gray001" style={ModalMessage1CSS}>
          저장이 완료되었습니다.
        </Text>
        <Text className="KRBody-1 gray002" style={ModalMessage2CSS}>
          마이페이지로 이동합니다.
        </Text>
      </Container>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow: CSSProperties = {
  position: 'relative',
  backgroundColor: 'var(--gray-white)',
  borderRadius: '8px',
};

const ModalImgCSS: CSSProperties = {
  position: 'absolute',
  top: '44px',
};

const ModalMessage1CSS: CSSProperties = {
  position: 'absolute',
  top: '172px',
};
const ModalMessage2CSS: CSSProperties = {
  position: 'absolute',
  top: '212px',
};
