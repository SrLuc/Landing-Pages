import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  width: 350px;
  height: 90px;
  background: #fffff2;
  box-shadow: 0px 8px 20px rgba(214, 211, 192, 0.4);
  border-radius: 28px;

  h4 {
    font-family: Unbounded;
    font-size: 20px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #3d405b;
  }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50px;
    margin-right:10px;
  }
`;
