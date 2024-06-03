import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-image: linear-gradient(to right, #0b0b0c, #161b2b);
    color: #000000;
    font-family: "Arimo";
  }
  
  button {
    cursor: pointer;
  }
`;
