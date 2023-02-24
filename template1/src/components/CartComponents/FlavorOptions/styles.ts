import styled from "styled-components";

export const StyledFlavorOptions = styled.div`
  border-radius: 28px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
    color: #3d405b;
  }

  section {
    padding: 5px;
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledOption = styled.div`
  display: inline-block;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 28px;
  padding: 15px 8px 10px 8px;
  box-shadow: 0px 8px 20px 0px #d6d3c066;
  color:#3D405B;

  img {
    height: 100px;
    width: 92px;
    padding: .5em;
  }

  h6 {
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
`;
