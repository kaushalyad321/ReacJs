import React from "react";
import { useNavigate } from "react-router-dom";

const S7 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "30px",
        }}
      >
        <div>
          <h1>SAMSUNG GALAXY S7</h1>
        </div>
        <div>
        <button
            onClick={() => {
              navigate(-1);
            }}
          >
          <img style={{ width: "50px" }} src="/Icons/arrow-left-solid.svg" alt="back" />
          </button>
        </div>
      </div>
      Samsung's brand new Galaxy S7 is a subtle improvement over its predecessor
      on the outside, but a whole new beast on the inside. Powered by the Exynos
      8890 SoC, this phone can blaze through absolutely anything you throw at
      it, with power to spare. The camera is absolutely amazing, especially in
      low light. This is a pragmatic phone, compared to its sibling the Galaxy
      S7 Edge, and is better value for money if you don't want to show off.
      However, with competition at an all-time high, you can also get most of
      its features and functions for one third this price.
    </div>
  );
};

export default S7;
