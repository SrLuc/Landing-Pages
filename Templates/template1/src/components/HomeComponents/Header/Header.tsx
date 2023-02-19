import React from "react";
import * as S from "./style";
import user from '../../../assets/user.svg'


interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.StyledHeader>
      <img src={user} alt="logo" />
      <h4>Welcome back, Pin! How Hungry are you?</h4>
    </S.StyledHeader>
  );
};

export default Header;
