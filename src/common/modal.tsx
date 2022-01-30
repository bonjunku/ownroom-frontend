import { useDispatch } from 'react-redux';
import styled, { CSSProperties } from 'styled-components';
import { icon_success } from '../static/images/svg';
import { useAppSelect } from '../store/configureStore.hooks';
import modal, { getModalState } from '../store/modules/modal';
import { Container } from './container';
import { Img } from './img';

import { Text } from './text';

export const Modal = () => {
  const modalState = useAppSelect(getModalState);
  const dispatch = useDispatch();

  return (
    <>
      {modalState.isVisible && (
        <ModalBackground>
          <Container width="470px" height="300px" style={ModalWindow}>
            <Img
              src={modalState.imgSrc}
              width="88px"
              height="88px"
              style={ModalImgCSS}
            ></Img>
            <Text className="KRDisplay-3 gray001" style={ModalMessage1CSS}>
              {modalState.mainMessage}
            </Text>
            <Text className="KRBody-1 gray002" style={ModalMessage2CSS}>
              {modalState.subMessage}
            </Text>
          </Container>
        </ModalBackground>
      )}
    </>
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
  top: '54px',
};

const ModalMessage1CSS: CSSProperties = {
  position: 'absolute',
  top: '172px',
};
const ModalMessage2CSS: CSSProperties = {
  position: 'absolute',
  top: '212px',
};
