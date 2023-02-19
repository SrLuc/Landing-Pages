import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html body #root{
        height: 100%;
    }
    body{
        font-family: 'DM Sans', sans-serif;
    }
    button{
        outline: none;
        border: none;
    }
    a{
        outline: none;
        text-decoration: none;
    }

`;

export default GlobalStyle