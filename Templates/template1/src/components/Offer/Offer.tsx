import React from "react";
import * as S from "./style";

interface OfferProps {}

const Offer = ({}: OfferProps) => {
  return (
    <S.StyledOffer>
      <img src="#" alt="food" />
      <div>
        <h2>Frenchdog</h2>
        <h4>Tasty&Spicy 🌶🌶🌶</h4>
      </div>
    </S.StyledOffer>
  );
};

export default Offer;
