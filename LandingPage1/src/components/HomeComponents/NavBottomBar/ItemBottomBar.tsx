import React, { Children } from "react";
import * as S from "./style";

interface ItemBottomBarProps {
  name: string;
  children: React.ReactNode;
}

//icons
import { MdGpsFixed } from "react-icons/md";

const ItemBottomBar = ({name, children }: ItemBottomBarProps) => {
  return (
    <S.StyledItemBottomBar>
      <i>{children}</i>
      <p>{name}</p>
    </S.StyledItemBottomBar>
  );
};

export default ItemBottomBar;
