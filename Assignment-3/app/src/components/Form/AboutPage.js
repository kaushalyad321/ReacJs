import React from "react";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>This is about Page</h1>
      </div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img style={{ width: "50px" }} src="/Icons/arrow-left-solid.svg" />
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
