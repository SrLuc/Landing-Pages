import React from "react";
import * as S from "./styles";
import { MdOutlineAdd } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";

interface CartAmountProps {}

const CartAmount = ({}: CartAmountProps) => {
  return (
    <S.StyledCartAmount>
      <div className="div1">
        <i className="then">{<IoIosRemove size={30} color="#3d405b" />}</i>
        <p>0</p>    
        <i className="more">{<MdOutlineAdd size={30} color="#fff"/>}</i>
      </div>

      <div className="div2">
        <h4>Add to Cart</h4>
        <h2>$27.45</h2>
      </div>
    </S.StyledCartAmount>
  );
};

export default CartAmount;
