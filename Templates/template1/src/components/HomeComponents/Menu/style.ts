import styled from "styled-components";

export const StyledMenu = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 5px;

  h1 {
    padding: 0 0 10px 30px;
    font-family: Arial, Helvetica, sans-serif,;
    letter-spacing: 5px;
    color: #3d405b;
    font-size: 35px;
  }

  img {
    position: absolute;
    z-index: 3;
    left: 200px;
    padding: 5px 0 0 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    border-radius: 28px;
    padding: 30px 20px 30px 20px;
    background: #84a59d;
    line-height: 30px;
    box-shadow: 0px 8px 32px 0px #81B29A66;


    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      color: #fff;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #F4F1DE;

    }
  }
`;
