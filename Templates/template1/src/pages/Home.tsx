import React from "react";
import * as S from "./StylePages";

//importações
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
        <Header/>
        <Search/>
    </S.StyledHomePage>
  );
};

export default Home;
