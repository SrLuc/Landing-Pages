import React from "react";
import * as S from "./style";
import ItemBottomBar from "./ItemBottomBar";

//icons
import { MdGpsFixed } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

//router
import { Link } from "react-router-dom";

interface NavBottomBarProps {}

const ContainerNavBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledContainerNavBar>
      <Link to="Location">
        <ItemBottomBar name="Location">
          <i>{<MdGpsFixed size={35} color="#0F0E0E" />}</i>
        </ItemBottomBar>
      </Link>

      <Link to="/">
        <ItemBottomBar name="Home">
          <i>{<AiOutlineHome size={35} color="#0F0E0E" />}</i>
        </ItemBottomBar>
      </Link>

      <Link to="/Cart">
        <ItemBottomBar name="My Cart">
          <i>{<AiOutlineShoppingCart size={35} color="#0F0E0E" />}</i>
        </ItemBottomBar>
      </Link>

      <Link to="/Me">
        <ItemBottomBar name="Me">
          <i>{<BiUser size={35} color="#0F0E0E" />}</i>
        </ItemBottomBar>
      </Link>
    </S.StyledContainerNavBar>
  );
};

export default ContainerNavBar;
