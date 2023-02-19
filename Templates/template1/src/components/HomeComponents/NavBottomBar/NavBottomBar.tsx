import React from "react";
import * as S from "./style";
import ItemBottomBar from "./ItemBottomBar";

interface NavBottomBarProps {}

const ContainerNavBar = ({}: NavBottomBarProps) => {
  return <S.StyledContainerNavBar>
    <ItemBottomBar/>
    <ItemBottomBar/>
    <ItemBottomBar/>
    <ItemBottomBar/>
  </S.StyledContainerNavBar>;
};

export default ContainerNavBar;
