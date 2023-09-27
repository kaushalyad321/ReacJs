import React from "react";
import { useNavigate } from "react-router-dom";

const S5 = () => {
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
          <h1>SAMSUNG GALAXY S5</h1>
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
      Samsung Galaxy S5 mobile was launched in April 2014. The phone comes with
      a 5.10-inch touchscreen display offering a resolution of 1080x1920 pixels
      at a pixel density of 432 pixels per inch (ppi) and an aspect ratio of
      16:9. The display sports Gorilla Glass for protection. Samsung Galaxy S5
      is powered by a 1.9GHz octa-core Samsung Exynos 5420 processor. It comes
      with 2GB of RAM. The Samsung Galaxy S5 runs Android 4.4.2 and is powered
      by a 2800mAh removable battery. As far as the cameras are concerned, the
      Samsung Galaxy S5 on the rear packs a 16-megapixel camera with an f/2.2
      aperture and a pixel size of 1.12-micron. The rear camera setup has phase
      detection autofocus. It sports a 2-megapixel camera on the front for
      selfies with an f/2.4 aperture. The Samsung Galaxy S5 runs TouchWiz is
      based on Android 4.4.2 and packs 16GB of inbuilt storage that can be
      expanded via microSD card (up to 128GB). The Samsung Galaxy S5 is a single
      SIM (GSM) mobile that accepts a Micro-SIM card. The Samsung Galaxy S5
      measures 142.00 x 72.50 x 8.10mm (height x width x thickness) and weighs
      145.00 grams. It was launched in White and Black colours. It bears a
      plastic body. Connectivity options on the Samsung Galaxy S5 include Wi-Fi
      802.11 a/b/g/n/ac, GPS, Bluetooth v4.00, NFC, Infrared, Micro-USB, Wi-Fi
      Direct, Mobile High-Definition Link (MHL), 3G, and 4G. Sensors on the
      phone include accelerometer, ambient light sensor, barometer, compass/
      magnetometer, gyroscope, proximity sensor, and fingerprint sensor. As of
      19th September 2023, Samsung Galaxy S5 price in India starts at Rs. 6,999.
    </div>
  );
};

export default S5;
