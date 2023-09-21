import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import A9 from "./productsDescription/A9";
import A54 from "./productsDescription/A54";
import Pro from "./productsDescription/Pro";
import S1 from "./productsDescription/S1";
import S5 from "./productsDescription/S5";
import S7 from "./productsDescription/S7";
import S20 from "./productsDescription/S20";
import ProductList from "./ProductList";

const RouterForProduct = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path="/A9" element={<A9 />} />
        <Route path="/A54" element={<A54 />} />
        <Route path="/Pro" element={<Pro />} />
        <Route path="/S1" element={<S1 />} />
        <Route path="/S5" element={<S5 />} />
        <Route path="/S7" element={<S7 />} />
        <Route path="/S20" element={<S20 />} />
      </Routes>
    </>
  );
};

export default RouterForProduct;
