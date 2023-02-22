import styled from "styled-components";

export const StyledBestSeller = styled.div`
  height: 300px;
  background: #f28482;
  border-radius: 0px 0px 28px 28px;
  z-index: 1;

  h1 {
    //border: 3px dashed blue;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
    padding: 10px 0 0 30px;
  }

  div {
    display: inline-flex;
    flex-direction: column;
    padding: 10px 0 0 30px;

    .ct {
      text-align: center;
      font-weight: bold;
      padding: 12px;
      border-radius: 28px;
      font-size: 20px;
      margin: 3px;
      color: #f28482;
      background: #f7ede2;
    }

    .bt {
      text-align: center;
      padding: 12px;
      background: #84A59D;
      border-radius: 28px;
      font-size: 17px;
      font-weight: bold;
      color: #fff;
      width: 70%;
      margin: 3px;
      

    }
  }

  img {
    position: relative;
    z-index: 2;
    left: 140px;
    bottom: 100px;
  }
`;
