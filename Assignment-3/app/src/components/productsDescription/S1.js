import React from "react";
import { useNavigate } from "react-router-dom";

const S1 = () => {
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
          <h1>VIVO S1</h1>
        </div>
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >

          <img style={{ width: "50px" }} src="/Icons/arrow-left-solid.svg" />
          </button >
        </div>
      </div>
      The S1 is the first smartphones under the S series from Vivo to launch in
      India. The S series focuses on style and there is no denying that the S1
      does look stylish. It comes in two colour variants called Diamond Black
      and Skyline Blue. We had the Diamond Black variant which had a catchy
      diamond pattern at the back. Vivo has put a 6.38-inch AMOLED display on
      the S1. It has good viewing angles and adequate brightness when outdoors.
      It also houses an in-display fingerprint scanner. The Vivo S1 has a
      waterdrop notch that houses the selfie camera. At the back, the S1 sports
      a triple camera setup consisting of a 16-megapixel primary sensor, an
      8-megapixel ultra-wide-angle lens and a 2-megapixel depth sensor. We
      weren't impressed with the fact that the S1 sports a Micro-USB port while
      most other smartphones in this price range have a Type-C port. Vivo ships
      the S1 with FunTouch OS running on top of Android 9 Pie. It has
      customisations and comes with a few apps preinstalled. The Vivo S1 is
      powered by a MediaTek Helio P65 SoC and is the first smartphone in India
      to do so. There are three variants of the Vivo S1, 4GB RAM with 128GB
      storage, 6GB RAM with 64GB of storage and 6GB RAM with 128GB of storage.
      We had the top-end variant for review and it did not face any issues in
      day-to-day usage. We played games like PUBG Mobile which the S1 ran at
      medium settings. The phone did get warm to the touch after gaming for 20
      minutes. The camera is where the S1 still needs some work as we weren't
      happy with its performance. It does a decent job in daylight but delivers
      below-average performance in low-light. The 4,500mAh battery offers good
      battery life and Vivo does ship an 18W fast charger in the box. The Vivo
      S1 does feel pricey compared to some of its competitors like the Realme X
      and the Oppo K3.
    </div>
  );
};

export default S1;
