import React from "react";
import * as S from "./style";

interface FoodProps {
    name:string;
}

const Food = ({name}: FoodProps) => {
  return <S.StyledFood>
    <p>{name}</p>
    <img src="#" alt="foodImages" />
  </S.StyledFood>
  ;
};

export default Food;
