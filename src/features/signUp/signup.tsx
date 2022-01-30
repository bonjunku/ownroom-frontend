import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';
import { Button } from '../../common/button';
import { Container } from '../../common/container';
import { Form } from '../../common/Form';
import { Img } from '../../common/img';
import { Input } from '../../common/input';
import { StyledLink } from '../../common/link';
import { Text } from '../../common/text';
import { symbol_with_text } from '../../static/images/svg';

import { useAppDispatch } from '../../store/configureStore.hooks';
import {
  duplicateCheckAsync,
  signUpAsync,
  SignUpInfo,
} from '../../store/modules/user';

export const SignUp = () => {
  const navigate = useNavigate();
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    id: '',
    password: '',
    userName: '',
    phoneNumber: '',
    duplicateChecked: false,
  });
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDuplicateCheckActive, setIsDuplicateCheckActive] =
    useState<boolean>(false);

  // Input 값 갱신
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  useEffect(() => {
    if (signUpInfo.id.length > 0) {
      setIsDuplicateCheckActive(true);
    } else {
      setIsDuplicateCheckActive(false);
    }
    if (
      signUpInfo.id.length > 0 &&
      signUpInfo.password.length > 0 &&
      signUpInfo.phoneNumber.length > 0 &&
      signUpInfo.userName.length > 0
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [handleChange]);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    signUpInfo: SignUpInfo
  ) => {
    event.preventDefault();
    if (signUpInfo.id.length < 5) {
      alert('아이디는 5자리 이상이어야 합니다.');
    } else if (signUpInfo.id.length > 10) {
      alert('아이디는 10자리 이하여야 합니다.');
    } else if (signUpInfo.password.length == 0) {
      alert('비밀번호를 입력해주세요.');
    } else if (signUpInfo.password.length < 8) {
      alert('비밀번호는 8자리 이상이어야 합니다.');
    } else if (signUpInfo.userName.length == 0) {
      alert('이름을 입력해주세요.');
    } else if (signUpInfo.phoneNumber.length == 0) {
      alert('휴대폰 번호를 입력해주세요.');
    } else if (signUpInfo.duplicateChecked == false) {
      alert('아이디 중복 확인을 진행해주세요.');
    } else if (/\d{3}\d{3,4}\d{4}/.test(signUpInfo.phoneNumber)) {
      alert('전화번호 사이에 - 을 넣어주세요.');
      setSignUpInfo({
        ...signUpInfo,
        phoneNumber:
          signUpInfo.phoneNumber.slice(0, 3) +
          '-' +
          signUpInfo.phoneNumber.slice(3, 7) +
          '-' +
          signUpInfo.phoneNumber.slice(7, 11),
      });
    } else
      dispatch(signUpAsync(signUpInfo)).then((data) => {
        if (data.type == 'user/SIGN_UP/fulfilled') {
          navigate('/welcome');
        }
      });
  };

  const duplicateCheck = (
    event: React.MouseEvent<HTMLButtonElement>,
    nickname: string
  ) => {
    event.preventDefault();
    if (signUpInfo.id.length < 5) {
      alert('아이디는 5자리 이상이어야 합니다.');
    } else {
      dispatch(duplicateCheckAsync(nickname)).then((data) => {
        if (data.type) {
          console.log('데이터:', data.payload.result);
          if (data.payload.result == 'false') {
            setSignUpInfo({ ...signUpInfo, duplicateChecked: true });
          }
        }
      });
    }
  };

  return (
    <>
      <Container height="1320px" style={BackgroundCSS}>
        <Container width="470px" position="relative">
          <Text className="ENHeadline-1 gray001" style={SignUpTitleCSS}>
            Sign up
          </Text>
          <Container style={SignUpDecoratorCSS} />
          <Text className="KRBody-1 gray001" style={SignUpText1CSS}>
            온룸에서 컨설턴트와 함께
            <br />
            나만의 집을 스타일링 해보세요.
          </Text>
          <Form
            style={SignUpFormCSS}
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              handleSubmit(event, signUpInfo);
            }}
          >
            <Text className="KRHeadline-1 orange001" style={SignUpText2CSS}>
              아이디 *
            </Text>
            <Text className="KRBody-2 gray003" style={SignUpText3CSS}>
              영문, 숫자를 포함한 아이디를 입력해주세요.(5-10자)
            </Text>
            {console.log('상태', signUpInfo.duplicateChecked)}
            {signUpInfo.duplicateChecked == false ? (
              <Input
                width={'264px'}
                height={'50px'}
                placeholder="아이디"
                style={SignUpInputIdCSS}
                name="id"
                onChange={handleChange}
                value={signUpInfo.id}
              />
            ) : (
              <Input
                width={'264px'}
                height={'50px'}
                placeholder={signUpInfo.id}
                style={SignUpInputIdCSS}
                name="id"
                disabled
                value={signUpInfo.id}
              />
            )}
            {signUpInfo.duplicateChecked ? (
              <Button
                width="100px"
                height="50px"
                style={SignUpAfterIdCheckButtonCSS}
                disabled
              >
                <Text className="KRHeadline-1 gray004">확인완료</Text>
              </Button>
            ) : (
              <Button
                width="100px"
                height="50px"
                style={SignUpIdCheckButtonCSS}
                isActive={isDuplicateCheckActive}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  duplicateCheck(event, signUpInfo.id)
                }
              >
                <Text className="KRHeadline-1 graywhite">중복확인</Text>
              </Button>
            )}
            <Text className="KRHeadline-1 orange001" style={SignUpText4CSS}>
              비밀번호 *
            </Text>
            <Text className="KRBody-2 gray003" style={SignUpText5CSS}>
              영문, 숫자를 포함한 비밀번호를 입력해주세요.(8자 이상)
            </Text>
            <Input
              type="password"
              width={'380px'}
              height={'50px'}
              style={SignUpInputPasswordCSS}
              placeholder="비밀번호"
              name="password"
              onChange={handleChange}
              value={signUpInfo.password}
            ></Input>
            <Text className="KRHeadline-1 orange001" style={SignUpText6CSS}>
              이름 *
            </Text>
            <Input
              width={'380px'}
              height={'50px'}
              style={SignUpInputNameCSS}
              placeholder="이름"
              name="userName"
              onChange={handleChange}
              value={signUpInfo.userName}
            ></Input>
            <Text className="KRHeadline-1 orange001" style={SignUpText7CSS}>
              휴대폰 번호 *
            </Text>
            <Input
              width={'380px'}
              height={'50px'}
              style={SignUpInputContactCSS}
              placeholder="010-0000-0000"
              name="phoneNumber"
              onChange={handleChange}
              value={signUpInfo.phoneNumber}
            ></Input>
            <Button
              type="submit"
              width="400px"
              height="50px"
              style={SignUpButtonCSS}
              isActive={isActive}
            >
              <Text className="KRHeadline-1 graywhite">회원가입</Text>
            </Button>
          </Form>

          <Img
            src={symbol_with_text}
            width="170px"
            height="77px"
            style={SignUpBottomLogoCSS}
          ></Img>
        </Container>
      </Container>
    </>
  );
};
const BackgroundCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
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
  top: '650px',
  backgroundColor: 'red',
};

const SignUpFormCSS: CSSProperties = {
  position: 'absolute',
  top: '330px',
  width: '400px',
  height: '674px',
};

const SignUpInputIdCSS: CSSProperties = {
  position: 'absolute',
  top: '80px',
  left: '0px',
  borderRadius: '8px',
};

const SignUpInputPasswordCSS: CSSProperties = {
  position: 'absolute',
  top: '250px',
  left: '0px',
  borderRadius: '8px',
};

const SignUpInputNameCSS: CSSProperties = {
  position: 'absolute',
  top: '382px',
  left: '0px',
  borderRadius: '8px',
};

const SignUpInputContactCSS: CSSProperties = {
  position: 'absolute',
  top: '514px',
  left: '0px',
  borderRadius: '8px',
};

const SignUpIdCheckButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '80px',
  right: 0,
};
const SignUpAfterIdCheckButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '80px',
  right: 0,
  backgroundColor: 'var(--gray-graywhite)',
  cursor: 'default',
};
const SignUpAfterIdCheckTextCSS: CSSProperties = {
  color: 'var(--gray-gray-004)',
};
const SignUpButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '624px',
};

const SignUpBottomLogoCSS: CSSProperties = {
  position: 'absolute',
  top: '1124px',
};
