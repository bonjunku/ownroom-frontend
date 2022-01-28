import axios from 'axios';
import { useState, ChangeEvent, CSSProperties } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../common/button';
import { Container } from '../../common/container';
import { Img } from '../../common/img';
import { getCookie } from '../../store/modules/user';
import { Text } from '../../common/text';
import IconDownload from '../../static/images/icon_download.svg';
import styled from 'styled-components';

export const ConsultingReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { nickname } = useParams();

  const [file, setFile] = useState<FileList | null>(null);
  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    setFile(event.target.files);
  };
  const handleSubmitFile = async () => {
    const formData = new FormData();
    console.log('현재file출력:', file);
    if (file) formData.append('file', file[0]);
    formData.append('nickname', `${nickname}`);

    const response = await axios({
      url: `https://api.ownroom.link/api/consultings/report/upload`,
      method: `POST`,
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
      data: formData,
    });
    if (response.status == 200) {
      alert(
        '컨설팅 보고서가 성공적으로 전송되었습니다.\n마이페이지에서 전송내역을 확인하실 수 있습니다.'
      );
      navigate('/');
    } else {
      alert('컨설팅 보고서 전송을 실패했습니다.');
    }
  };
  return (
    <Container type="column">
      <Container height="300px" style={backgroundColorCSS}>
        <Container width="1920px" position="relative">
          <Img
            src={
              process.env.PUBLIC_URL + '/img/consultant/applicationbanner.jpg'
            }
            style={ApplicationBannerCSS}
          ></Img>

          <Text
            className="KRDisplay-2 gray001"
            style={ApplicationBannerText1CSS}
          >
            컨설팅 보고서
          </Text>
          <Text className="KRBody-2 gray001" style={ApplicationBannerText2CSS}>
            나만의 컨설팅 노하우를 보고서에 담아주세요.
          </Text>
        </Container>
      </Container>
      <Container height="1010px" position="relative" style={backgroundColorCSS}>
        {/* 1번 컨테이너 */}
        <Container
          width="846px"
          height="337px"
          position="absolute"
          style={ApplicationContainer1CSS}
        >
          <Container height="11px" style={ApplicationContainerDecoratorCSS} />

          <Text
            className="ENHeadline-1 gray001"
            style={ApplicationContainerNumberCSS}
          >
            1.
          </Text>
          <Text
            className="KRDisplay-3 gray001"
            style={ApplicationContainerTitleCSS}
          >
            컨설팅 보고서를 다운받아 작성해 주세요.
          </Text>
          <Img
            src={IconDownload}
            width="35px"
            height="35px"
            style={ApplicationContainer1IconCSS}
          ></Img>
          <a href="/format/온룸 컨설팅 신청서 양식.docx" download>
            <Text
              className="KRBody-2 gray001"
              style={ApplicationContainer1Text1CSS}
            >
              온룸 컨설팅 보고서 양식.docx
            </Text>
          </a>
          <div style={ApplicationContainer1DividingLineCSS} />
          <Text
            className="KRBody-3 gray002"
            style={ApplicationContainer1Text2CSS}
          >
            양식을 다운 받아 컨설팅 신청서를 작성한 후<br />
            보고서를 페이지에 업로드하면 해당 컨설턴트에게 전달됩니다.
          </Text>
          <Text
            className="KRBody-3 orange001"
            style={ApplicationContainer1Text3CSS}
          >
            (파일명-'고객 본인 이름_컨설팅 보고서')
          </Text>
          <Img
            src={process.env.PUBLIC_URL + '/img/consultant/1.png'}
            width={'90.5px'}
            height={'182px'}
            style={ApplicationContainerBackgroundNumber1CSS}
          ></Img>
        </Container>

        {/* 2번 컨테이너 */}
        <Container
          width="846px"
          height="333px"
          position="absolute"
          style={ApplicationContainer2CSS}
        >
          <Container height="11px" style={ApplicationContainerDecoratorCSS} />
          <Text
            className="ENHeadline-1 gray001"
            style={ApplicationContainerNumberCSS}
          >
            2.
          </Text>

          <Text
            className="KRDisplay-3 gray001"
            style={ApplicationContainerTitleCSS}
          >
            작성한 양식을 업로드해 주세요.
          </Text>
          <ApplicationContainer2FileContainer>
            {/* <Text className="KRBody-3 gray003">
              작성한 양식을 업로드해 주세요.
            </Text> */}

            <input
              type="file"
              id="file"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChangeFile(event);
              }}
              multiple={true}
            ></input>
          </ApplicationContainer2FileContainer>
          <Img
            src={process.env.PUBLIC_URL + '/img/consultant/2.png'}
            width={'145.5px'}
            height={'177.5px'}
            style={ApplicationContainerBackgroundNumber2CSS}
          ></Img>
        </Container>
        <Button
          width="400px"
          height="50px"
          style={SaveButtonCSS}
          onClick={handleSubmitFile}
        >
          <Text className="KRHeadline-1 graywhite">저장하기</Text>
        </Button>
      </Container>
    </Container>
  );
};
const backgroundColorCSS: CSSProperties = {
  backgroundColor: 'var(--brand-orange-005)',
};

const ApplicationBannerCSS: CSSProperties = {
  position: 'absolute',
};

const ApplicationBannerText1CSS: CSSProperties = {
  position: 'absolute',
  top: '107px',
};
const ApplicationBannerText2CSS: CSSProperties = {
  position: 'absolute',
  top: '157px',
};

const ApplicationContainer1CSS: CSSProperties = {
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
  position: 'absolute',
  top: '60px',
  boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.08)',
};

const ApplicationContainer2CSS: CSSProperties = {
  backgroundColor: 'var(--gray-white)',
  borderRadius: '10px',
  position: 'absolute',
  top: '457px',
  boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.08)',
};

const ApplicationContainerDecoratorCSS: CSSProperties = {
  backgroundColor: 'var(--brand-orange-002)',
  position: 'absolute',
  top: 0,
};

const ApplicationContainerNumberCSS: CSSProperties = {
  position: 'absolute',
  top: '55px',
  left: '87px',
};

const ApplicationContainerTitleCSS: CSSProperties = {
  position: 'absolute',
  top: '58px',
  left: '145px',
};

const ApplicationContainer1Text1CSS: CSSProperties = {
  position: 'absolute',
  left: '183px',
  top: '126px',
};
const ApplicationContainer1Text2CSS: CSSProperties = {
  position: 'absolute',
  left: '145px',
  top: '195px',
};
const ApplicationContainer1Text3CSS: CSSProperties = {
  position: 'absolute',
  left: '145px',
  top: '241px',
};
const ApplicationContainer1IconCSS: CSSProperties = {
  position: 'absolute',
  left: '145px',
  top: '126px',
};

const ApplicationContainer1DividingLineCSS: CSSProperties = {
  position: 'absolute',
  left: '185px',
  top: '156.5px',
  backgroundColor: 'var(--gray-gray-002)',
  width: '184px',
  height: '0.5px',
};

const ApplicationContainer2FileContainer = styled.div`
  width: 480px;
  height: 140px;
  border-radius: 10px;
  border: solid 1px var(--brand-orange-002);
  background-color: var(--gray-white);
  position: absolute;
  top: 126px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ApplicationContainerBackgroundNumber1CSS: CSSProperties = {
  position: 'absolute',
  top: '155px',
  right: '63.5px',
};

const ApplicationContainerBackgroundNumber2CSS: CSSProperties = {
  position: 'absolute',
  top: '156px',
  right: '34.5px',
};

const SaveButtonCSS: CSSProperties = {
  position: 'absolute',
  top: '870px',
};
