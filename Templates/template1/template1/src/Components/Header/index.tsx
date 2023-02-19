import React from "react";
import * as S from "./style";

import logo from '../../assets/logo.png'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.StyledHeader>
      <img src={logo} alt="Logo" />
      <h4>Welcome back, Pin! How Hungry are You ?</h4>
    </S.StyledHeader>
  );
};

export default Header;
