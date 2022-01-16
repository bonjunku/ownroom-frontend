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

export const SignUp = () => {
  return (
    <>
      <Container height="1320px">
        <Container width="470px" position="relative">
          <Text className="ENHeadline-1 gray001" style={SignUpTitleCSS}>
            Signp
          </Text>
          <Container style={SignUpDecoratorCSS} />
          <Text className="KRBody-1 gray001" style={SignUpText1CSS}>
            온룸에서 컨설턴트와 함께
            <br />
            나만의 집을 스타일링 해보세요.
          </Text>
          <Form style={SignUpFormCSS}>
            <Text className="KRHeadline-1 orange001" style={SignUpText2CSS}>
              아이디 *
            </Text>
            <Text className="KRBody-2 gray003" style={SignUpText3CSS}>
              영문, 숫자를 포함한 아이디를 입력해주세요.(5-10자)
            </Text>
            <Input
              width={'315px'}
              height={'60px'}
              placeholder="아이디"
              style={SignUpInputIdCSS}
            ></Input>
            <Button width="120px" height="60px" style={SignUpIdCheckButtonCSS}>
              <Text className="KRHeadline-1 graywhite">중복확인</Text>
            </Button>
            <Text className="KRHeadline-1 orange001" style={SignUpText4CSS}>
              비밀번호 *
            </Text>
            <Text className="KRBody-2 gray003" style={SignUpText5CSS}>
              영문, 숫자를 포함한 비밀번호를 입력해주세요.(8자 이상)
            </Text>
            <Input
              type="password"
              width={'470px'}
              height={'60px'}
              style={SignUpInputPasswordCSS}
              placeholder="비밀번호"
            ></Input>
            <Text className="KRHeadline-1 orange001" style={SignUpText6CSS}>
              이름 *
            </Text>
            <Input
              width={'470px'}
              height={'60px'}
              style={SignUpInputNameCSS}
              placeholder="이름"
            ></Input>
            <Text className="KRHeadline-1 orange001" style={SignUpText7CSS}>
              연락처 *
            </Text>
            <Input
              width={'470px'}
              height={'60px'}
              style={SignUpInputContactCSS}
              placeholder="연락처"
            ></Input>
            <Button width="470px" height="60px" style={SignUpButtonCSS}>
              <Text className="KRHeadline-1 graywhite">회원가입</Text>
            </Button>
          </Form>

          <Container
            width="290px"
            height="32px"
            style={SignUpTextContainerCSS}
          ></Container>
          <Img
            src={SymbolWithText}
            width="170px"
            height="77px"
            style={SignUpBottomLogoCSS}
          ></Img>
        </Container>
      </Container>
    </>
  );
};

const SignUpTitleCSS: CSSProperties = {
  position: 'absolute',
  top: '110px',
};
const SignUpDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: '182px',

  width: '62px',
  height: '4px',
  backgroundColor: 'var(--brand-orange-001)',
};
const SignUpText1CSS: CSSProperties = {
  textAlign: 'center',
  position: 'absolute',
  top: '216px',
};
const SignUpText2CSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
};
const SignUpText3CSS: CSSProperties = {
  position: 'absolute',
  top: '40px',
  left: 0,
};
const SignUpText4CSS: CSSProperties = {
  position: 'absolute',
  top: '170px',
  left: 0,
};
const SignUpText5CSS: CSSProperties = {
  position: 'absolute',
  top: '210px',
  left: 0,
};
const SignUpText6CSS: CSSProperties = {
  position: 'absolute',
  top: '340px',
  left: 0,
};
const SignUpText7CSS: CSSProperties = {
  position: 'absolute',
  top: '472px',
  left: 0,
};
const SignUpTextContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '630px',
};

const SignUpFormCSS: CSSProperties = {
  position: 'absolute',
  top: '330px',
  width: '470px',
  height: '574px',
};

const SignUpInputIdCSS: CSSProperties = {
  position: 'absolute',
  top: '80px',
  left: '0px',
};

const SignUpInputPasswordCSS: CSSProperties = {
  position: 'absolute',
  top: '250px',
  left: '0px',
};

const SignUpInputNameCSS: CSSProperties = {
  position: 'absolute',
  top: '382px',
  left: '0px',
};

const SignUpInputContactCSS: CSSProperties = {
  position: 'absolute',
  top: '514px',
  left: '0px',
};

const SignUpIdCheckButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '80px',
  right: 0,
};

const SignUpButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '624px',
};

const SignUpBottomLogoCSS: CSSProperties = {
  position: 'absolute',
  top: '1134px',
};
