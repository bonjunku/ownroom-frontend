import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/configureStore.hooks';
import {
  downloadConsultingApplicationAsync,
  downloadConsultingReportAsync,
} from '../../../store/modules/user';
import { Button } from '../../../common/button';
import { Container } from '../../../common/container';
import { Text } from '../../../common/Text';
import { Img } from '../../../common/img';
import {
  docs_activated,
  docs_deactivated,
  write_activated,
  write_deactivated,
} from '../../../static/images/svg';

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
      <Text className="gray002" style={MyPageItemText3CSS}>
        컨설팅 신청서
      </Text>
      <Img
        src={docs_activated}
        width={'23px'}
        height={'23px'}
        style={Img1CSS}
        onClick={downloadConsultantApplication}
      />
      <Text className="gray002" style={MyPageItemText4CSS}>
        컨설팅 보고서
      </Text>
      {isConsultant && isReported && (
        <>
          <Img
            src={write_deactivated}
            width={'23px'}
            height={'23px'}
            style={Img2CSS}
          />
          <Img
            src={docs_activated}
            width={'23px'}
            height={'23px'}
            style={Img3CSS}
            onClick={downloadConsultantReport}
          />
        </>
      )}
      {isConsultant && !isReported && (
        <>
          <Img
            src={write_activated}
            width={'23px'}
            height={'23px'}
            style={Img2CSS}
            onClick={downloadConsultantReport}
          />
          <Img
            src={docs_deactivated}
            width={'23px'}
            height={'23px'}
            style={Img3CSS}
            onClick={downloadConsultantReport}
          />
        </>
      )}
      {!isConsultant && isReported && (
        <>
          <Img
            src={docs_activated}
            width={'23px'}
            height={'23px'}
            style={Img4CSS}
            onClick={downloadConsultantReport}
          />
        </>
      )}
      {!isConsultant && !isReported && (
        <>
          <Img
            src={docs_deactivated}
            width={'23px'}
            height={'23px'}
            style={Img4CSS}
            onClick={downloadConsultantReport}
          />
        </>
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

const MyPageItemText3CSS: CSSProperties = {
  fontFamily: 'Noto Sans KR',
  position: 'absolute',
  right: '281px',
  fontSize: '17px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
};
const MyPageItemText4CSS: CSSProperties = {
  fontFamily: 'Noto Sans KR',
  position: 'absolute',
  right: '102px',
  fontSize: '17px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
};

const Img1CSS: CSSProperties = {
  position: 'absolute',
  right: '248px',
  cursor: 'pointer',
};
const Img2CSS: CSSProperties = {
  position: 'absolute',
  right: '67.8px',
  cursor: 'pointer',
};
const Img3CSS: CSSProperties = {
  position: 'absolute',
  right: '40.3px',
  cursor: 'pointer',
};
const Img4CSS: CSSProperties = {
  position: 'absolute',
  right: '72.3px',
  cursor: 'pointer',
};
