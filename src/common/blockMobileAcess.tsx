import { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './button';

export const BlockMobileAccess = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisible = () => {
    if (window.innerWidth < 942) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const handleClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    handleVisible();
    window.addEventListener('resize', handleVisible);
    return () => {
      window.removeEventListener('resize', handleVisible);
    };
  }, []);

  return (
    <>
      {visible ? (
        <StyledMobileAccess>
          <MessageContainer>
            <Exclamation src="https://user-images.githubusercontent.com/62752488/152343140-02b9175e-d60b-4433-8cd8-defa2fde2739.png" />
            <Message>
              온룸은 PC에 최적화되어 있어요.
              <br /> PC로 확인해주세요.
            </Message>
            <Button
              width="12vw"
              height="5vw"
              isActive
              onClick={handleClick}
              style={ButtonCSS}
            >
              확인
            </Button>
          </MessageContainer>
        </StyledMobileAccess>
      ) : null}
    </>
  );
};

const StyledMobileAccess = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 942px) {
    display: none;
  }
`;

const MessageContainer = styled.div`
  background-color: var(--gray-white);
  border-radius: 8px;
  width: 70vw;
  height: 35vw;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Exclamation = styled.img`
  width: 9vw;
  height: 9vw;
  position: absolute;
  top: 4vw;
`;

const Message = styled.div`
  text-align: center;
  font-family: Noto Sans KR;
  font-weight: bold;
  position: absolute;
  top: 16vw;
  font-size: 3vw;
`;

const ButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '27vw',
  fontFamily: 'Noto Sans KR',
  fontWeight: 'bold',
  fontSize: '2vw',
};
