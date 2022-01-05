import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    background-color: yellow;
  
  }

  *{
    margin:0;
    padding:0;
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
`;
