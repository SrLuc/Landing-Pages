import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 5px;

  input {
    padding: 2px 20px;
    width: 100%;
    height: 44px;
    border-radius: 16px;
    margin-right: 5px;
    border: none;
    gap: 8px;
    background-color: #f5f5f5;
    border-radius: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 15px 60px -12px, rgba(0, 0, 0, 0.3) 0px 1px 36px -18px inset;
    font-size: 17px;
    outline: none;
  }

  button {
    width: 60px;
    height: 44px;
    background: #f28482;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
