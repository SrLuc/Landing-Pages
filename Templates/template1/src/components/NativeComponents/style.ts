import styled from "styled-components";
import { icons } from "react-icons";

export const StyledTopStatusBar = styled.div`
  height: 20px;
  padding: 0 20px;
  margin: 5px;

  display: flex;
  justify-content: space-between;
  align-content: center;

  p {
    padding-top: 5px;
    display: flex;
    align-content: center;

  }

  div {
    display: flex;
    justify-content: space-around;
    width: 70px;
    i {
      display: flex;
      align-items: center;
      margin: 5px;
    }
  }
`;
