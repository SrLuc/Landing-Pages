import React from "react";
import * as S from "./style";
import donut from "../../../assets/donut.svg";

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  return (
    <S.StyledMenu>
      <h1>Today's Menu</h1>
      <div>
        <article className="fr">
          <h4>Free Donut</h4>
          <p>For orders over $20</p>
        </article>
        <article className="dn">
          <img src={donut} alt="donutImage" />
        </article>
      </div>
    </S.StyledMenu>
  );
};

export default Menu;
