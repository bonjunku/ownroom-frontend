import { CSSProperties } from 'styled-components';
import { Button } from '../../components/@shared/button';
import { Container } from '../../components/@shared/container';
import { Img } from '../../components/@shared/img';
import { StyledLink } from '../../components/@shared/link';
import { Text } from '../../components/@shared/text';
import { useAppSelect } from '../../store/configureStore.hooks';
import { getNickName } from '../../store/modules/user';

export const Welcome = () => {
  const nickName = useAppSelect(getNickName);
  return (
    <>
      <Container height="1000px">
        <Container width="1920px" position="relative">
          <Img
            src={process.env.PUBLIC_URL + '/img/welcome/welcome.jpg'}
            style={BackgroundImgCSS}
          ></Img>
          <Container width="1136px" position="relative">
            <Text className="KRDisplay-1 graywhite" style={Text1CSS}>
              {nickName}님 반갑습니다!
            </Text>
            <Text className="KRBody-1 graywhite" style={Text2CSS}>
              온룸에서 컨설턴트와 함께
              <br />
              나만의 집을 스타일링 해보세요.
            </Text>
            <Container
              height="70px"
              width="470px"
              justifyContent="space-evenly"
              position="relative"
              style={ButtonContainerCSS}
            >
              <StyledLink to="/">
                <Button
                  width="220px"
                  height="50px"
                  top="0"
                  left="0"
                  style={ButtonCSS}
                >
                  <Text className="KRHeadline-1 orange001">홈으로</Text>
                </Button>
              </StyledLink>
              <StyledLink to="/application/consultant">
                <Button
                  width="220px"
                  height="50px"
                  top="0"
                  right="0"
                  style={ButtonCSS}
                >
                  <Text className="KRHeadline-1 orange001">
                    컨설턴트 신청하기
                  </Text>
                </Button>
              </StyledLink>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};
const BackgroundImgCSS: CSSProperties = {
  position: 'absolute',
  zIndex: -1,
};

const ContainerCSS: CSSProperties = {
  position: 'absolute',
};

const Text1CSS: CSSProperties = {
  position: 'absolute',
  top: '250px',
};

const Text2CSS: CSSProperties = {
  position: 'absolute',
  top: '382px',
  textAlign: 'center',
};

const ButtonContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '546px',
};

const ButtonCSS: CSSProperties = {
  backgroundColor: 'var(--gray-white)',
};
