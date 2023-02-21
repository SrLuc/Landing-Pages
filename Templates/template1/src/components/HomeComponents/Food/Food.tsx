import React from "react";
import * as S from "./style";

interface FoodProps {
  name: string;
  image:string;
  nameClass?:string;
}

const Food = ({ name, image, nameClass }: FoodProps) => {
  return (
    <S.StyledFood className={nameClass}>
      <p>{name}</p>
      <img src={image} alt="foodImages" />
    </S.StyledFood>
  );
};

export default Food;
