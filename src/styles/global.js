import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-button {
    visibility: hidden;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PRIMARY};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.PRIMARY_HOVER};
  }
`