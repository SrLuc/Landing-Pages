import styled from "styled-components";

export const StyledCartAmount = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;

  div {
    box-shadow: 0px 16px 32px 0px #c2bfac99;
    padding: 10px;
    width: 140px;
    height: 76px;
    border-radius: 20px;
    background-color: transparent;
  }

  .div1 {
    border: 2px solid #f28482;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
      border-radius: 100%;
      display: flex;
      align-items: center;
    }

    p {
      font-size: 25px;
      font-weight: bold;
      color: #3d405b;
    }

    .more {
      background: #f28482;
    }

    .then {
      background: #f7ede2;
    }
  }

  .div2 {
    background-color: #f28482;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    color: whitesmoke;
    font-size: 21px;

    h4 {
      font-weight: 100;
    }

    h2 {
      font-weight: bolder;
      text-shadow: #c2bfac99;
    }
  }
`;
