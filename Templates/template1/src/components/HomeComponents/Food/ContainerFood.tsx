import React from "react";
import * as S from "./style";
import Food from "./Food";

interface ContainerFoodProps {}

const ContainerFood = ({}: ContainerFoodProps) => {
  return <S.StyledContainerFood>
    <Food name="Burgers"/>
    <Food name="Fries"/>
    <Food name="Drinks"/>
  </S.StyledContainerFood>;
};

export default ContainerFood;
