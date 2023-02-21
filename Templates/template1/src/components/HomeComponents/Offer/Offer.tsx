import React from "react";
import * as S from "./style";
import hotdogImage from "../../../assets/hotdog.svg";

interface OfferProps {
}

const Offer = ({ }: OfferProps) => {
  return (
    <S.StyledOffer>
      <span>
        <img src={hotdogImage} alt="food" />
      </span>
      <div>
        <h2>Frenchdog</h2>
        <h4>Tasty&Spicy 🌶🌶🌶</h4>
      </div>
    </S.StyledOffer>
  );
};

export default Offer;
