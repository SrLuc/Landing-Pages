import React from "react";
import * as S from "./StylePages";

//importações
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Menu from "../components/Menu/Menu";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
        <Header/>
        <Search/>
        <Menu/>
    </S.StyledHomePage>
  );
};

export default Home;
