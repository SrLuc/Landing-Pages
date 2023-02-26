import React from "react";

//components
import ContainerNavBar from "../components/HomeComponents/NavBottomBar/NavBottomBar";
import TopStatusBar from "../components/NativeComponents/TopStatusBar";

interface MeProps {}

const Me = ({}: MeProps) => {
  return (
    <div>
      <TopStatusBar />




      
      <ContainerNavBar />
    </div>
  );
};

export default Me;
