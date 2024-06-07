import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background-image: linear-gradient(to right, #0b0b0c, #161b2b);
    color: #000000;
    font-family: "Arimo";
  }
  
  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 0.3em;
    height: 0.3em;
    overflow-x: none;
}
::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 0.3em;
}
::-webkit-scrollbar-thumb {
    background: #ffffff;
    background: -webkit-linear-gradient(to bottom, #5785e3b3, #4e1ce69e);
    background: linear-gradient(to bottom, #5785e3b3, #4e1ce69e);
    border-radius: 0.3em;
}

::selection {
  background-color: #C1E1C1;
}
`;
