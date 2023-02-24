import React from "react";
import * as S from "./style";
import Food from "./Food";

import hamburguerImage from "../../../assets/hamburguer.svg";
import drinkImage from "../../../assets/drink.svg";
import friesImage from "../../../assets/fries.svg";

interface ContainerFoodProps {}

const ContainerFood = ({}: ContainerFoodProps) => {
  return (
    <S.StyledContainerFood>
      <Food image={hamburguerImage} name="Burgers" nameClass="bg" />
      <Food image={friesImage} name="Fries" nameClass="fr" />
      <Food image={drinkImage} name="Drinks" nameClass="dr" />
    </S.StyledContainerFood>
  );
};

export default ContainerFood;
