import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Button } from '../../components/@shared/button';
import { Container } from '../../components/@shared/container';
import { Form } from '../../components/@shared/Form';
import { Img } from '../../components/@shared/img';
import { Input } from '../../components/@shared/input';
import { StyledLink } from '../../components/@shared/link';
import { Text } from '../../components/@shared/text';
import SymbolWithText from '../../static/images/symbol_with_text.svg';

export const LogIn = () => {
  return (
    <>
      <Container height="1000px" style={BackgroundCSS}>
        <Container width="470px" position="relative">
          <Text className="ENHeadline-1 gray001" style={LogInTitleCSS}>
            Login
          </Text>
          <Container style={LogInDecoratorCSS} />
          <Text className="KRBody-1 gray001" style={LogInText1CSS}>
            온룸에서 컨설턴트와 함께
            <br />
            나만의 집을 스타일링 해보세요.
          </Text>
          <Form style={LogInFormCSS}>
            <Text className="KRHeadline-1 orange001" style={LogInText2CSS}>
              아이디
            </Text>
            <Input
              width={'280px'}
              height={'50px'}
              placeholder="아이디"
              style={LogInInputIdCSS}
            ></Input>
            <Text className="KRHeadline-1 orange001" style={LogInText3CSS}>
              비밀번호
            </Text>
            <Input
              type="password"
              width={'280px'}
              height={'50px'}
              style={LogInInputPasswordCSS}
              placeholder="비밀번호"
            ></Input>
            <Button width="400px" height="60px" style={LogInButtonCSS}>
              <Text className="KRHeadline-1 graywhite">로그인</Text>
            </Button>
          </Form>

          <Container width="290px" height="32px" style={LogInTextContainerCSS}>
            <Text className="KRBody-1 gray002" style={LogInText4CSS}>
              온룸을 처음 이용하시나요?
            </Text>
            <StyledLink to="/signup">
              <Text className="KRBody-1 gray001">회원가입</Text>
            </StyledLink>
          </Container>
          <Img
            src={SymbolWithText}
            width="170px"
            height="77px"
            style={LoginBottomLogoCSS}
          ></Img>
        </Container>
      </Container>
    </>
  );
};
const BackgroundCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};

const LogInTitleCSS: CSSProperties = {
  position: 'absolute',
  top: '110px',
};
const LogInDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: '182px',

  width: '62px',
  height: '4px',
  backgroundColor: 'var(--brand-orange-001)',
};
const LogInText1CSS: CSSProperties = {
  textAlign: 'center',
  position: 'absolute',
  top: '216px',
};
const LogInText2CSS: CSSProperties = {
  position: 'absolute',
  top: '9px',
  left: 0,
};
const LogInText3CSS: CSSProperties = {
  position: 'absolute',
  top: '87px',
  left: 0,
};
const LogInText4CSS: CSSProperties = {
  marginRight: '7px',
};
const LogInTextContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '606px',
};

const LogInFormCSS: CSSProperties = {
  position: 'absolute',
  top: '340px',
  width: '400px',
  height: '154px',
};

const LogInInputIdCSS: CSSProperties = {
  position: 'absolute',
  left: '100px',
};

const LogInInputPasswordCSS: CSSProperties = {
  position: 'absolute',
  top: '78px',
  left: '100px',
};

const LogInButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '156px',
};

const LoginBottomLogoCSS: CSSProperties = {
  position: 'absolute',
  top: '758px',
};
