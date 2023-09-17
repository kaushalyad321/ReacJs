import React, { useContext } from "react";
import { productsContext } from "./ShoppingCart";

const Cart = () => {
  const productsList = useContext(productsContext);
  const totalValue = () => {
    let sum = 0;
    productsList.map((product) => {
      sum += parseInt(product.price);
      return 0;
    });
    return sum;
  };

  console.log(productsList);
  return (
    <>
      <div>Total Cart Value : {totalValue()}</div>
    </>
  );
};

export default Cart;
