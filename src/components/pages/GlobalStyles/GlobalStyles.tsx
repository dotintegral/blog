import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0px;
    padding: 0px;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: "Source Sans Pro", sans-serif;
    background: url(/background.jpg) ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
`;
