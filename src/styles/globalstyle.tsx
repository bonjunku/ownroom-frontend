import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    width:100%;
    height: 100%;
  
 
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
  .orange001{
    color:var(--brand-orange-001)
  }
  .orange002{
    color:var(--brand-orange-002)
  }
  .orange003{
    color:var(--brand-orange-003);
  }
  .orange004{
    color:var(--brand-orange-004);
  }
  .orange005{
    color:var(--brand-orange-005);
  }
  .yellow001{
    color:var(--brand-yellow-001)
  }
  .red001{
    color:var(--brand-red-001)
  }
  .dark{
    color:var(--dark)
  }
  .gray001{
    color:var(--gray-gray-001)
  }
  .gray002{
    color:var(--gray-gray-002)
  }
  .gray003{
    color:var(--gray-gray-003)
  }
  .gray004{
    color:var(--gray-gray-004)
  }
  .gray005{
    color:var(--gray-gray-005)
  }
  .gray006{
    color:var(--gray-gray-006)
  }
  .gray007{
    color:var(--gray-gray-007)
  }
  .graywhite{
    color:var(--gray-white)
  }

  body{
    width:100%;
    height:100%;
    overflow-y:scroll;

  }

  * {
    padding:0px;
    margin:0px;
    box-sizing:border-box; 
  }

  /* font */


.ENHeadline-0{
  font-family: Taviraj;
  font-size: 55px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: normal;
}
.ENHeadline-1 {
  font-family: Taviraj;
  font-size: 36px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  line-height: 46px;
  letter-spacing: -0.36px;
}

.ENBody-1{
  font-family: Taviraj;
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
}
.KRDisplay-1 {
  font-family: Noto Sans KR;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 52px;
  letter-spacing: normal;
}
.KRDisplay-2 {
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 42px;
  letter-spacing: normal;
}
.KRDisplay-3 {
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 36px;
  letter-spacing: normal;
}
.KRHeadline-1 {
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
}
.KRHeadline-2 {
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;
}
.KRHeadline-3 {
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;
}
.KRBody-1 {
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 32px;
  letter-spacing: normal;
}
.KRBody-2 {
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 30px;
  letter-spacing: normal;
}

.KRBody-3 { 
  font-family: Noto Sans KR;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 23px;
  letter-spacing: normal;
}
  
`;
