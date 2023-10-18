import React from "react";
import { useNavigate } from "react-router-dom";

const A54 = () => {
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
          <h1>Samsung Galaxy A54</h1>
        </div>
        <div>
        <button
            onClick={() => {
              navigate(-1);
            }}>
          <img style={{ width: "50px" }} src="/Icons/arrow-left-solid.svg" />
          </button>
        </div>
      </div>
      Samsung Galaxy A54 5G mobile was launched on 16th March 2023. The phone
      comes with a 120 Hz refresh rate 6.40-inch touchscreen display offering a
      resolution of 2340x1080 pixels (HD+). Samsung Galaxy A54 5G is powered by
      a 2.4 MHz octa-core processor. It comes with 8GB of RAM. The Samsung
      Galaxy A54 5G runs Android 13 and is powered by a 5000mAh non-removable
      battery. As far as the cameras are concerned, the Samsung Galaxy A54 5G on
      the rear packs a triple camera setup featuring a 50-megapixel primary
      camera; a 12-megapixel camera, and a 5-megapixel camera. It has a single
      front camera setup for selfies, featuring a 32-megapixel sensor. The
      Samsung Galaxy A54 5G runs One UI 5.0 is based on Android 13 and packs
      128GB, 256GB of inbuilt storage that can be expanded via microSD card (up
      to 1000GB). The Samsung Galaxy A54 5G measures 158.20 x 76.70 x 8.20mm
      (height x width x thickness) and weighs 202.00 grams. It was launched in
      Awesome Lime, Awesome Graphite, Awesome Violet, and and Awesome White
      colours. It features an IP67 rating for dust and water protection.
      Connectivity options on the Samsung Galaxy A54 5G include Wi-Fi, GPS, and
      NFC. As of 19th September 2023, Samsung Galaxy A54 5G price in India
      starts at Rs. 36,999.
    </div>
  );
};

export default A54;
