import React from "react";
import * as S from "./styles";

interface OptionProps {
  image: string;
  name: string;
  price: string;
}


const Option = ({ image, name, price }: OptionProps) => {
  return (
    <S.StyledOption>
      <img src={image} alt="" />
      <h6>{name}</h6>
      <p>{price}</p>
    </S.StyledOption>
  );
};

export default Option;
