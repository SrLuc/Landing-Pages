import styled from "styled-components";

export const StyledHeader = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&family=Unbounded:wght@200;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&display=swap");

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  border-radius: 28px;
  padding: 12px 12px 12px 20px;
  box-shadow: 0px 8px 20px 0px #d6d3c066;
  background: #fffff2;

  img {
    border-radius: 50%;
    margin-right: 20px;
  }

  h4 {
    font-family: "Noto Sans", sans-serif;
    font-size: 23px;
    font-weight: 100;
    text-align: left;
    color: #3d405b;
  }
`;
