import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/configureStore.hooks';
import {
  downloadConsultingApplicationAsync,
  downloadConsultingReportAsync,
} from '../../store/modules/user';
import { Button } from '../@shared/button';
import { Container } from '../@shared/container';
import { Text } from '../@shared/text';

export const MyConsultingListItem = ({
  isConsultant,
  owner,
  consultant,
  isReported,
  created_date,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const downloadConsultantApplication = () => {
    if (isConsultant) {
      dispatch(downloadConsultingApplicationAsync(owner));
    } else {
      dispatch(downloadConsultingApplicationAsync(consultant));
    }
  };
  const downloadConsultantReport = () => {
    if (!isReported && isConsultant) {
      navigate(`/consulting/report/${owner}`);
    } else if (isConsultant) {
      dispatch(downloadConsultingReportAsync(owner));
    } else {
      dispatch(downloadConsultingReportAsync(consultant));
    }
  };
  return (
    <Container height="100px" style={MyPageItemCSS}>
      <Text className="KRHeadline-2 gray001" style={MyPageItemText1CSS}>
        {isConsultant ? owner : consultant}
      </Text>
      <Text className="KRBody-3 gray002" style={MyPageItemText2CSS}>
        시작일 {created_date.slice(0, 10)}
      </Text>
      {isConsultant && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton1CSS}
          onClick={() => {
            downloadConsultantApplication();
          }}
        >
          <Text className="KRHeadline-2 orange001">컨설팅 신청서 확인</Text>
        </Button>
      )}
      {isConsultant && isReported && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton2CSS}
          onClick={() => {
            downloadConsultantReport();
          }}
        >
          <Text className="KRHeadline-2 orange001">컨설팅 보고서 확인</Text>
        </Button>
      )}
      {isConsultant && !isReported && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton2CSS}
          onClick={() => {
            downloadConsultantReport();
          }}
        >
          <Text className="KRHeadline-2 orange001">컨설팅 보고서 작성</Text>
        </Button>
      )}
      {!isConsultant && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton1CSS}
          onClick={() => {
            downloadConsultantApplication();
          }}
        >
          <Text className="KRHeadline-2 orange001">컨설팅 신청서 확인</Text>
        </Button>
      )}
      {!isConsultant && isReported && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton2CSS}
          onClick={() => {
            downloadConsultantReport();
          }}
        >
          <Text className="KRHeadline-2 orange001">컨설팅 보고서 확인</Text>
        </Button>
      )}
      {!isConsultant && !isReported && (
        <Button
          width="184px"
          height="44px"
          style={MyPageItemButton2CSS}
          onClick={() => {
            downloadConsultantReport();
          }}
        >
          <Text className="KRHeadline-2 gray004">컨설팅 보고서 확인</Text>
        </Button>
      )}
    </Container>
  );
};
const MyPageItemCSS: CSSProperties = {
  width: '100%',
  height: '100px',
  backgroundColor: 'var(--brand-orange-005)',
  marginBottom: '26px',
  borderRadius: '8px',
  position: 'relative',
};

const MyPageItemText1CSS: CSSProperties = {
  position: 'absolute',
  left: '40.1px',
  top: '22px',
};
const MyPageItemText2CSS: CSSProperties = {
  position: 'absolute',
  left: '40.1px',
  top: '54px',
};

const MyPageItemButton1CSS: CSSProperties = {
  position: 'absolute',
  top: '28px',
  right: '223px',
  backgroundColor: 'var(--gray-white)',
};
const MyPageItemButton2CSS: CSSProperties = {
  position: 'absolute',
  top: '28px',
  right: '25px',
  backgroundColor: 'var(--gray-white)',
};
