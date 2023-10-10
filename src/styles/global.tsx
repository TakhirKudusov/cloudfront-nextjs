"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
  }

  html {
    overflow-x: hidden;
  }
  
  html,
  body {
    max-width: 100vw;
    background-color: black;
  }
  

  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export default GlobalStyles;
