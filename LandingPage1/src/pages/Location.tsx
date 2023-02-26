import React from "react";
import * as S from "./StylePages";

//components
import ContainerNavBar from "../components/HomeComponents/NavBottomBar/NavBottomBar";
import TopStatusBar from "../components/NativeComponents/TopStatusBar";

interface LocationProps {}

const Location = ({}: LocationProps) => {
  return (
    <S.StyledLocationPage>
      <TopStatusBar/>
      <div id="main">
        <div className="fof">
          <h1>Error 404</h1>
        </div>
      </div>
      <ContainerNavBar />
    </S.StyledLocationPage>
  );
};

export default Location;
