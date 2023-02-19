import React from "react";
import * as S from "./style";

interface ItemBottomBarProps {}

const ItemBottomBar = ({}: ItemBottomBarProps) => {
  return (
    <S.StyledItemBottomBar>
      <img src="#" alt="item" />
      <p>text</p>
    </S.StyledItemBottomBar>
  );
};

export default ItemBottomBar;
