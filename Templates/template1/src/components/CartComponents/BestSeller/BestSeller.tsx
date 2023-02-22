import React from "react";
import * as S from "./styles";

//image
import besteseller from '../../../assets/besteseller.svg'

interface BestSellerProps {}

const BestSeller = ({}: BestSellerProps) => {
  return (
    <S.StyledBestSeller>
      <h1>Mr. Cheezy</h1>
      <div>
        <span className="ct">Classic Taste</span>
        <span className="bt">Bestseller</span>
      </div>
      <img src={besteseller} alt="" />
    </S.StyledBestSeller>
  );
};

export default BestSeller;
