import styled from 'styled-components';

export const BlockMobileAccess = () => {
  return (
    <StyledMobileAccess>
      <MessageContainer>
        <Exclamation src="https://user-images.githubusercontent.com/62752488/152343140-02b9175e-d60b-4433-8cd8-defa2fde2739.png" />
        <Message>
          앗, 화면 폭이 너무 좁아요!
          <br />
          브라우저 크기를 늘려주시거나
          <br />
          PC로 접속해주세요.
        </Message>
      </MessageContainer>
    </StyledMobileAccess>
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
  font-size: 3.5vw;
`;
