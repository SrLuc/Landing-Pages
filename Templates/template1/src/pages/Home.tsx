import React from "react";
import * as S from "./StylePages";

//importações
import Header from "../components/Header/Header";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
        <Header/>
    </S.StyledHomePage>
  );
};

export default Home;
