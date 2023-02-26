import React from "react";
import * as S from "./styles";
import Option from "./Option";

//import imagens
import onionImage from "../../../assets/onion.svg";
import chesseImage from "../../../assets/chesse.svg";
import baconImage from "../../../assets/bacon.svg";

interface FlavorOptionsProps {}

const FlavorOptions = ({}: FlavorOptionsProps) => {
  return (
    <S.StyledFlavorOptions>
      <h1>Add More Flavor 🤩</h1>
      <section>
        <Option image={onionImage} name="Chedder" price="+ $0.79" />
        <Option image={chesseImage} name="Bacon" price="+ $0.59" />
        <Option image={baconImage} name="Onion" price="+ $0.29" />
      </section>
    </S.StyledFlavorOptions>
  );
};

export default FlavorOptions;
