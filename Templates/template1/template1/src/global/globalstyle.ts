import styled, { createGlobalStyle } from "styled-components";
import { GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: "Roboto", Helvetica, sans-serif;
        outline: none;
        text-decoration: none;
    };

    html, body, #root{
    height: 100%;
    width: 100%;
    }

    

`;

export default GlobalStyle;
