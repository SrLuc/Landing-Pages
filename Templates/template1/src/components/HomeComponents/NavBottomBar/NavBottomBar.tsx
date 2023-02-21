import React from "react";
import * as S from "./style";
import ItemBottomBar from "./ItemBottomBar";

//icons
import { MdGpsFixed } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

interface NavBottomBarProps {}

const ContainerNavBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledContainerNavBar>
      
      <ItemBottomBar name="Location">
        <i>{<MdGpsFixed size={35} />}</i>
      </ItemBottomBar>

      <ItemBottomBar name="Home">
        <i>{<AiOutlineHome size={35} />}</i>
      </ItemBottomBar>

      <ItemBottomBar name="My Cart">
        <i>{<AiOutlineShoppingCart size={35} />}</i>
      </ItemBottomBar>

      <ItemBottomBar name="Me">
        <i>{<BiUser size={35} />}</i>
      </ItemBottomBar>

    </S.StyledContainerNavBar>
  );
};

export default ContainerNavBar;
