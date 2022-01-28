import { Container } from '../../common/container';
import { Img } from '../../common/img';
import { PortfolioList } from '../consultantPortfolio/components/portfolioList';
import { Text } from '../../common/text';
import { CSSProperties, useEffect, useState } from 'react';
import { Button } from '../../common/button';
import ProfileIcon from '../../static/images/icon_profile.svg';
import styled from 'styled-components';
import {
  fetchConsultingInfoAsync,
  fetchMyInfoAsync,
  getUserInfo,
  setCookie,
  switchStatusAsync,
  User,
} from '../../store/modules/user';
import { useAppDispatch, useAppSelect } from '../../store/configureStore.hooks';
import { useNavigate } from 'react-router-dom';
import { MyConsultingListItem } from './components/myConsultingListItem';

export const MyPage = () => {
  const navigate = useNavigate();
  const userInfo = useAppSelect(getUserInfo);

  const dispatch = useAppDispatch();

  // 고객,컨설턴트 전환
  const switchStatus = () => {
    dispatch(switchStatusAsync(userInfo.isConsultant));
  };

  // 로그아웃
  const logOut = () => {
    dispatch({ type: 'user/LOG_OUT' });
    navigate('/');
  };

  // 컨설팅 정보 불러오기
  interface ConsultingInfo {
    owner: string;
    consultant: string;
    isReported: boolean;
    created_date: string;
  }
  const initialConsultingInfo: ConsultingInfo = {
    owner: '',
    consultant: '',
    isReported: false,
    created_date: '',
  };

  const [consultingInfoList, setConsultingInfoList] = useState<
    ConsultingInfo[]
  >([initialConsultingInfo]);

  useEffect(() => {
    dispatch(fetchConsultingInfoAsync()).then((data) =>
      setConsultingInfoList(data.payload)
    );
  }, [userInfo.isConsultant]);

  return (
    <>
      {/*마이 페이지 상단 배너 */}
      <Container height="300px" position="relative">
        <Img src={process.env.PUBLIC_URL + '/img/mypage/mypage.jpg'} />
        <Text style={MyPageBannerText1CSS} className="ENHeadline-1 gray001">
          My consulting
        </Text>
        <Text style={MyPageBannerText2CSS} className="KRBody-2 gray001">
          현재 진행 중인 컨설팅 현황입니다.
        </Text>
      </Container>

      {/* 여백 */}
      <Container height="60px" style={BackgroundCSS} />

      {/* 마이페이지 본문*/}
      <Container
        height={
          Object.keys(consultingInfoList).length > 3
            ? `${120 + Object.keys(consultingInfoList).length * 126 + 34}px`
            : '532px'
        }
        style={BackgroundCSS}
      >
        <Container width="1136px" position="relative">
          {/* 마이페이지 좌측 컨테이너 */}
          <Container
            width="266px"
            height="522px"
            style={MyPageLeftContainerCSS}
          >
            <Container
              style={MyPageContainerDecoratorCSS}
              height="12px"
            ></Container>
            <Img src={ProfileIcon} style={MyPageProfileIconCSS} />
            <Text className="KRHeadline-1 gray001" style={MyPageIdCSS}>
              {userInfo.nickname}
            </Text>
            <Text className="KRHeadline-2 orange001" style={MyPagePositionCSS}>
              {userInfo.isConsultant ? '컨설턴트' : '고객'}
            </Text>

            <Container style={MyPagePersonalInfoCSS}>
              <Text
                className="KRBody-2 gray001"
                style={MyPagePersonalInfoNameCSS}
              >
                {userInfo.name}
              </Text>
              <Text
                className="KRBody-2 gray001"
                style={MyPagePersonalInfoPhoneNumberCSS}
              >
                {userInfo.phoneNumber}
              </Text>
            </Container>
            <Button
              width="184px"
              height="44px"
              style={MyPagePositionConversionCSS}
              onClick={switchStatus}
            >
              <Text className="KRHeadline-3 gray007">
                {userInfo.isConsultant ? '고객으' : '컨설턴트'}로 전환
              </Text>
            </Button>
            <Text
              className="KRBody-2 gray002"
              style={MyPageLogOutCSS}
              onClick={logOut}
            >
              로그아웃
            </Text>
          </Container>
          {/* 마이페이지 우측 컨테이너 */}
          <Container
            width="846px"
            height={
              Object.keys(consultingInfoList).length > 3
                ? `${120 + Object.keys(consultingInfoList).length * 126 + 24}px`
                : '522px'
            }
            style={MyPageRightContainerCSS}
          >
            <Container
              style={MyPageContainerDecoratorCSS}
              height="12px"
            ></Container>
            <Text className="KRHeadline-1 gray001" style={MyPageTitle}>
              마이 컨설팅
            </Text>
            <Container width="774px" style={MyPageItemContainerCSS}>
              {Object.keys(consultingInfoList).length == 0 ? (
                <Text className="KRBody-2 gray002" style={MyPageItemEmptyCSS}>
                  아직 진행된 컨설팅이 없습니다. 컨설팅을 시작해보세요!
                </Text>
              ) : (
                Object.keys(consultingInfoList).map((element) => (
                  <MyConsultingListItem
                    key={element}
                    isConsultant={userInfo.isConsultant}
                    owner={consultingInfoList[element].owner}
                    consultant={consultingInfoList[element].consultant}
                    isReported={consultingInfoList[element].isReported}
                    created_date={consultingInfoList[element].created_date}
                  ></MyConsultingListItem>
                ))
              )}
            </Container>
          </Container>
        </Container>
      </Container>
      {/* 여백 */}
      <Container height="50px" style={BackgroundCSS} />
    </>
  );
};

const BackgroundCSS: CSSProperties = {
  backgroundColor: 'var(--gray-gray-007)',
};
// 상단 배너 관련
const MyPageProfileIconCSS: CSSProperties = {
  width: '42px',
  height: '42px',
  position: 'absolute',
  left: '30px',
  top: '50px',
};
const MyPageBannerText1CSS: CSSProperties = {
  position: 'absolute',
  top: '108px',
};

const MyPageBannerText2CSS: CSSProperties = {
  position: 'absolute',
  top: '160px',
};

// 본문 좌측 컨테이너
const MyPageLeftContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '0px',
  left: 0,
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
  boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.08)',
};

const MyPageContainerDecoratorCSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  backgroundColor: 'var(--brand-orange-003)',
};

const MyPageIdCSS: CSSProperties = {
  position: 'absolute',
  left: '86px',
  top: '50px',
};

const MyPagePositionCSS: CSSProperties = {
  position: 'absolute',
  left: '30px',
  top: '114px',
};

const MyPagePersonalInfoCSS: CSSProperties = {
  position: 'absolute',
  left: '31px',
  top: '156px',
  width: '125px',
  height: '64px',
};
const MyPagePersonalInfoNameCSS: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
};
const MyPagePersonalInfoPhoneNumberCSS: CSSProperties = {
  position: 'absolute',
  bottom: 0,
  left: 0,
};

const MyPagePositionConversionCSS: CSSProperties = {
  position: 'absolute',
  top: '246px',
  left: '29px',
};
const MyPageLogOutCSS: CSSProperties = {
  position: 'absolute',
  left: '35px',
  top: '316px',
  cursor: 'pointer',
};

//본문 우측 컨테이너

const MyPageRightContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '0px',
  right: 0,
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
  boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.08)',
};

const MyPageTitle: CSSProperties = {
  position: 'absolute',
  left: '40px',
  top: '50px',
};

const MyPageItemContainerCSS: CSSProperties = {
  position: 'absolute',
  top: '120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
};

const MyPageItemEmptyCSS: CSSProperties = {
  position: 'absolute',
  top: '118px',
};
