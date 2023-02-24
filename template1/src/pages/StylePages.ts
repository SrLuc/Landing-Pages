import styled from "styled-components";

export const StyledHomePage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledCartPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledMePage = styled.section``;

export const StyledLocationPage = styled.section`
  * {
    transition: all 0.6s;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "Lato", sans-serif;
    color: #888;
    margin: 0;
  }

  #main {
    display: table;
    width: 100%;
    height: 88vh;
    text-align: center;
  }

  .fof {
    display: table-cell;
    vertical-align: middle;
  }

  .fof h1 {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type 0.5s alternate infinite;
  }

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
