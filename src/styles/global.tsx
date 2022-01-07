import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    background-color: yellow;

  /* Color */
  --brand-orange-001: #ff9a62;
  --brand-orange-003: #ffe7d9;
  --brand-orange-002: #ffb78e;
  --brand-orange-004: #ffefe7;
  --brand-orange-005: #fcfaf7;
  --brand-yellow-001: #f8f6ea;
  --gray-gray-001: #353535;
  --brand-red-001: #ff3e3e;
  --dark: rgba(0, 0, 0, 0.5);
  --gray-gray-002: #737373;
  --gray-gray-003: #aaaaad;
  --gray-gray-004: #d0d0d3;
  --gray-gray-005: #e8e8eb;
  --gray-white: #fff;
  --gray-gray-007: #fafafa;
  --gray-gray-006: #f3f3f4;
  }

  * {
    padding:0px;
    margin:0px;
    box-sizing:border-box; 
  }

  html,body{
    width:100%;
    height: 100%;
  }

  #root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

 
  

  /* font */
  font-face {
  font-family: AppleSDGothicNeo;
  src: local(AppleSDGothicNeo-Regular),
    url(/path/to/AppleSDGothicNeo-Regular.woff2) format("woff2"),
    url(/path/to/AppleSDGothicNeo-Regular.woff) format("woff"),
    url(/path/to/AppleSDGothicNeo-Regular.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  } 

  @font-face {
    font-family: AppleSDGothicNeo;
    src: local(AppleSDGothicNeo-Bold),
      url(/path/to/AppleSDGothicNeo-Bold.woff2) format("woff2"),
      url(/path/to/AppleSDGothicNeo-Bold.woff) format("woff"),
      url(/path/to/AppleSDGothicNeo-Bold.ttf) format("truetype");
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: Taviraj;
    src: local(Taviraj-MediumItalic),
    url(/path/to/Taviraj-MediumItalic.woff2) format("woff2"),
    url(/path/to/Taviraj-MediumItalic.woff) format("woff"),
    url(/path/to/Taviraj-MediumItalic.ttf) format("truetype");
    font-weight: 500;
    font-style: italic;
    font-stretch: normal;
  }
  .KRDisplay-1 {
    font-family: AppleSDGothicNeo;
    font-size: 45px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
  }
  .KRDisplay-2 {
    font-family: AppleSDGothicNeo;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: normal;
  }
  .ENHeadline1 {
    font-family: Taviraj;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: italic;
    line-height: 1.28;
    letter-spacing: -0.36px;
  }
  .KRDisplay-3 {
    font-family: AppleSDGothicNeo;
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
  }
  .KRHeadline-1 {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: normal;
  }
  .KRBody-1 {
    font-family: AppleSDGothicNeo;
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.59;
    letter-spacing: normal;
  }
  .KRBody-2 {
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
  }
  .KRHeadline-2 {
    font-family: AppleSDGothicNeo;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
  }
  .KRHeadline-3 {
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: normal;
  }
  .KRBody-3 {
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: normal;
  }
  
`;
