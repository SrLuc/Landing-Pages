import React from "react";

//components
import TopStatusBar from "../components/NativeComponents/TopStatusBar";
import ContainerNavBar from "../components/HomeComponents/NavBottomBar/NavBottomBar";
import BestSeller from "../components/CartComponents/BestSeller/BestSeller";
import FlavorOptions from "../components/CartComponents/FlavorOptions/FlavorOptions";
import NutrionsFacts from "../components/CartComponents/NutrionsFacts/NutrionsFacts";


interface CartProps {}

const Cart = ({}: CartProps) => {
  return <div>
    <TopStatusBar/>
    <BestSeller/>
    <FlavorOptions/>
    <NutrionsFacts/>
    <ContainerNavBar/>
  </div>;
};

export default Cart;
