import React from "react";

//components
import TopStatusBar from "../components/NativeComponents/TopStatusBar";
import ContainerNavBar from "../components/HomeComponents/NavBottomBar/NavBottomBar";
import BestSeller from "../components/CartComponents/BestSeller/BestSeller";

interface CartProps {}

const Cart = ({}: CartProps) => {
  return <div>
    <TopStatusBar/>
    <BestSeller/>
    <ContainerNavBar/>
  </div>;
};

export default Cart;
