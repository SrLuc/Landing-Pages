import styled from "styled-components";

export const StyledMenu = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 5px;

  h1 {
    padding: 0 0 10px 30px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    color: #3d405b;
    font-size: 35px;
  }

  div {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-radius: 28px;
    padding: 20px;
    background: #84a59d;
    line-height: 30px;
    box-shadow: 0px 8px 32px 0px #81b29a66;

    .fr {
      display: inline-block;

      h4 {
        font-size: 34px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        line-height: 50px;
        color: #fff;
      }

      p {
        font-size: 17px;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: #f4f1de;
      }
    }

    .dn {
      img{
        width: 150px;
      }
    }
  }
`;
