import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
  }

  body {
    margin: 0px;
    padding: 0px;
    background: url(/background.jpg) ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    
    font-family: "Source Sans Pro", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }

  p {
    margin-top: 36px;
    margin-bottom: 36px;
    color: #303030;
  }
`;
