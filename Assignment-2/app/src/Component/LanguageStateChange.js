import React, { useContext } from "react";
import { Context } from "./LanguageSwitcher";
const LanguageStateChange = () => {
  const Content = useContext(Context);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="main" style={{ marginTop: "20px" }}>
          <div className="content">{Content}</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageStateChange;
