import React from "react";
import * as S from "./styles";

interface NutrionsFactsProps {}

const NutrionsFacts = ({}: NutrionsFactsProps) => {
  return (
    <S.StyledNutrionsFacts>
      <S.styledTopStatusSection>
        <span>
          <h1>Nutrition facts</h1>
        </span>
        <span>
          <h2>650 Cal</h2>
        </span>
      </S.styledTopStatusSection>

      <S.styledBottonStatusSection>
        <div>
          <span>35g</span>
          <p>Total Fat</p>
        </div>
        <div>
          <span>43g</span>
          <p>Total Carbs</p>
        </div>
        <div>
          <span>36g</span>
          <p>Protein</p>
        </div>
      </S.styledBottonStatusSection>
    </S.StyledNutrionsFacts>
  );
};

export default NutrionsFacts;
