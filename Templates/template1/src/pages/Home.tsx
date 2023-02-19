import React from "react";
import * as S from "./StylePages";

//importações
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Menu from "../components/Menu/Menu";
import ContainerFood from "../components/Food/ContainerFood";
import Offer from "../components/Offer/Offer";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
      <Header />
      <Search />
      <Menu />
      <ContainerFood />
      <Offer/>
    </S.StyledHomePage>
  );
};

export default Home;
