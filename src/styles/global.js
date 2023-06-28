import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  p, body, select, textarea {
    font-family: 'Roboto', sans-serif;

  }
  
  a, button, input {
    font-family: 'Roboto Slab', serif;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`