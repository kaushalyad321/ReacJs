import React from "react";
import { useNavigate } from "react-router-dom";

const Pro = () => {
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
          <h1>POCO M2 PRO</h1>
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
      The Poco M2 Pro has an attractive design and is built well, but it also
      looks very similar to the Redmi Note 9 Pro. It features a P2i
      water-repellent coating, which is said to make it splash-proof. Poco has
      used a 6.67-inch full-HD+ LCD display, with a cutout for the selfie
      camera. You also get Gorilla Glass 5 on the front, back, and the rear
      camera module. One feature that's missing is a high refresh rate. The Poco
      M2 Pro runs on MIUI 11, which is based on Android 10, and my unit had the
      June security patch. Apart from having the Poco Launcher as a default, the
      features and functionality are very similar to what you get on Redmi
      devices. MIUI and app performance were superb thanks to the Qualcomm
      Snapdragon 720G SoC. Navigating through MIUI's interface felt snappy,
      multitasking worked well, and apps in general were quick to load. Gaming
      performance was very good too. The 5,000mAh capacity easily lasted for an
      entire day, even with lots of gaming and camera usage. The Poco M2 Pro has
      four rear cameras, which include a primary 48-megapixel sensor, an
      8-megapixel sensor with a wide-angle lens, a 5-megapixel macro camera, and
      a 2-megapixel depth camera. You get a 16-megapixel hole-punch selfie
      camera. Overall, the cameras of the Poco M2 Pro performed decently under
      good light, but struggled to deliver satisfactory results in low light.
    </div>
  );
};

export default Pro;
