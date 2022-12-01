import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
}
     body {
          font-family: 'Noto Sans', sans-serif;
          background:black;
          padding: 2rem;
          color: white;
}
`;