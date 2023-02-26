import React, {useState} from "react";
import * as S from "./style";

//icons
import { icons } from "react-icons";
import { GiNetworkBars } from "react-icons/gi";
import { HiWifi } from "react-icons/hi";
import { BsBatteryHalf } from "react-icons/bs";


//dataStatus
import { showTime } from "./teste";

interface TopStatusBarProps {}

const TopStatusBar = ({}: TopStatusBarProps) => {

  const [hour, setHour] = useState(showTime);

  

  return (
    <S.StyledTopStatusBar>
      <p>{hour}</p>
      <div>
        <i>{<GiNetworkBars size={20} color="#000" />}</i>
        <i>{<HiWifi size={20} color="#000" />}</i>
        <i>{<BsBatteryHalf size={25} color="#000" />}</i>
      </div>
    </S.StyledTopStatusBar>
  );
};

export default TopStatusBar;
