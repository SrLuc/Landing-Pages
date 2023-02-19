import React from "react";
import * as S from "./style";
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.StyledHeader>
      <img src="#" alt="logo" />
      <h4>Welcome back, Pin! How Hungry are you?</h4>
    </S.StyledHeader>
  );
};

export default Header;
