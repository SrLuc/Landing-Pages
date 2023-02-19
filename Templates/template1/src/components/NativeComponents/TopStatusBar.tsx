import React from "react";
import * as S from "./style";

//icons
import { icons } from "react-icons";
import { GiNetworkBars } from "react-icons/gi";
import { HiWifi } from "react-icons/hi";
import { BsBatteryHalf } from "react-icons/bs";

interface TopStatusBarProps {}

const TopStatusBar = ({}: TopStatusBarProps) => {
  return (
    <S.StyledTopStatusBar>
      <p>00:00</p>
      <div>
        <i>{<GiNetworkBars size={20} color="#000" />}</i>
        <i>{<HiWifi size={20} color="#000" />}</i>
        <i>{<BsBatteryHalf size={25} color="#000" />}</i>
      </div>
    </S.StyledTopStatusBar>
  );
};

export default TopStatusBar;
