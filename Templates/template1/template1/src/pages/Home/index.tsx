import React from "react";
import Header from "../../Components/Header";
import * as S from "./style";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHome>
      <Header />
    </S.StyledHome>
  );
};

export default Home;
