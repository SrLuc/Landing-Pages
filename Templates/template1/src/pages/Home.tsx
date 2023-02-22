import React from "react";
import * as S from "./StylePages";

//importações
import TopStatusBar from "../components/NativeComponents/TopStatusBar";
import Header from "../components/HomeComponents/Header/Header";
import Search from "../components/HomeComponents/Search/Search";
import Menu from "../components/HomeComponents/Menu/Menu";
import ContainerFood from "../components/HomeComponents/Food/ContainerFood";
import Offer from "../components/HomeComponents/Offer/Offer";
import ContainerNavBar from "../components/HomeComponents/NavBottomBar/NavBottomBar";


interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <S.StyledHomePage>
      <TopStatusBar/>
      <Header />
      <Search />
      <Menu />
      <ContainerFood />
      <Offer />
      <ContainerNavBar/>
    </S.StyledHomePage>
  );
};

export default Home;
