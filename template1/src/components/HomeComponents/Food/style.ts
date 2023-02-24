import styled from "styled-components";

export const StyledFood = styled.div`
  height: 130px;
  border-radius: 30px;
  padding: 20px 8px 0 10px;
  box-shadow: 0px 8px 20px 0px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  overflow: hidden;
`;

export const StyledContainerFood = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 5px;
  text-align: center;
  color: #3d405b;
  font-weight: bold;

  .bg {
    background: #ffef92;
  }

  .fr {
    background: #f5cac3;
  }

  .dr {
    background: #b6d7cf;
  }
`;
