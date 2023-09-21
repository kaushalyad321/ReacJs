import React from "react";
import { useNavigate } from "react-router-dom";
const A9 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "30px",
        }}>
      
        <div>
          <h1>Redmi 9A</h1>
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
      Redmi 9A mobile was launched on 30th June 2020. The phone comes with a
      6.53-inch touchscreen display offering a resolution of 720x1600 pixels and
      an aspect ratio of 20:9. Redmi 9A is powered by a 2GHz octa-core MediaTek
      Helio G25 processor. It comes with 2GB of RAM. The Redmi 9A runs Android
      10 and is powered by a 5000mAh non-removable battery. The Redmi 9A
      supports proprietary fast charging. As far as the cameras are concerned,
      the Redmi 9A on the rear packs a 13-megapixel camera with an f/2.2
      aperture. It sports a 5-megapixel camera on the front for selfies with an
      f/2.2 aperture. The Redmi 9A runs MIUI 12 is based on Android 10 and packs
      32GB of inbuilt storage that can be expanded via microSD card (up to
      512GB) with a dedicated slot. The Redmi 9A is a dual-SIM (GSM and GSM)
      mobile that accepts Nano-SIM and Nano-SIM cards. The Redmi 9A measures
      164.90 x 77.07 x 9.00mm (height x width x thickness) and weighs 194.00
      grams. It was launched in Midnight Grey, Peacock Green, and Twilight Blue
      colours. Connectivity options on the Redmi 9A include Wi-Fi, Micro-USB, FM
      radio, 3G, and 4G with active 4G on both SIM cards. The Redmi 9A supports
      face unlock. As of 19th September 2023, Redmi 9A price in India starts at
      Rs. 6,999.
    </div>
  );
};

export default A9;
