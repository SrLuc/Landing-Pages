import React, { useState } from "react";
import * as S from "./styles";
import { MdOutlineAdd } from "react-icons/md";
import { IoIosRemove } from "react-icons/io";

interface CartAmountProps {}

const CartAmount = ({}: CartAmountProps) => {
  const [count, setCount] = useState(1);
  const [finalPrice, setFinalPrince] = useState(10.98);


//Consetar Função com as boas praticas do hook useState  
//   function removeAmount() {
//     setCount(count - 1);
//     setFinalPrince(finalPrice - 10.98);
//   }

//   function addAmount() {
//     setCount(count + 1);
//     setFinalPrince(finalPrice + 10.98);
//   }

  return (
    <S.StyledCartAmount>
      <div className="div1">
        <i className="then" id="menos">
          {<IoIosRemove size={30} color="#3d405b" />}
        </i>
        <p>{count}</p>
        <i className="more" id="mais">
          {<MdOutlineAdd size={30} color="#fff" />}
        </i>
      </div>

      <div className="div2">
        <h4>Add to Cart</h4>
        <h2>{finalPrice}</h2>
      </div>
    </S.StyledCartAmount>
  );
};

export default CartAmount;

//onClick={() => setCount(count - 1)}
//onClick={() => setCount(count + 1)}
