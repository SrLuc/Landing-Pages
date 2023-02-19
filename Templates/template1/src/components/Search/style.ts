import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 5px;
  border: 1px solid red;

  input {
    padding: 2px 20px;
    width: 300px;
    height: 44px;
    background: #f5f5f5;
    border-radius: 16px;
    margin-right: 5px;
    border: none;
  }

  button {
    width: 44px;
    height: 44px;
    background: #f28482;
    border-radius: 16px;
  }
`;
