import React from "react";
import { useNavigate } from "react-router-dom";

const S20 = () => {
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
          <h1>MOTOROLA S20</h1>
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
      Motoroola S20 mobile was launched on 11th February 2020. The phone comes
      with a 6.20-inch touchscreen display offering a resolution of 1440x3200
      pixels and an aspect ratio of 20:9. Motorola S20 is powered by a 2GHz
      octa-core Samsung Exynos 990 processor that features 2 cores clocked at
      2.73GHz, 2 cores clocked at 2.5GHz and 4 cores clocked at 2GHz. It comes
      with 8GB of RAM. The Samsung Galaxy S20 runs Android 10 and is powered by
      a 4000mAh non-removable battery. The Motorola S20 supports wireless
      charging, as well as proprietary fast charging. As far as the cameras are
      concerned, the Motorola S20 on the rear packs a 12-megapixel (f/1.8)
      primary camera; a 64-megapixel (f/2.0) camera, and a 12-megapixel (f/2.2)
      camera. The rear camera setup has autofocus. It sports a 10-megapixel
      camera on the front for selfies with an f/2.2 aperture. The front camera
      also features autofocus. The Motorola S20 runs One UI 2.0 is based on
      Android 10 and packs 128GB of inbuilt storage that can be expanded via
      microSD card (up to 1000GB). The Motorola S20 is a dual-SIM (GSM and GSM)
      mobile that accepts Nano-SIM and Nano-SIM cards. The Motorola S20 measures
      151.70 x 69.10 x 7.90mm (height x width x thickness) and weighs 163.00
      grams. It was launched in Cloud Blue, Cloud Pink, Cosmic Grey, and
      colours. It features an IP68 rating for dust and water protection. It
      bears a glass body. Connectivity options on the Motorola S20 include Wi-Fi
      802.11 a/b/g/n/ac/ax, GPS, Bluetooth v5.00, NFC, USB Type-C, 3G, and 4G
      with active 4G on both SIM cards. Sensors on the phone include
      accelerometer, ambient light sensor, barometer, compass/ magnetometer,
      gyroscope, proximity sensor, and in-display fingerprint sensor. The
      Samsung Galaxy S20 supports face unlock. As of 19th September 2023,
      Motorola S20 price in India starts at Rs. 38,999.
    </div>
  );
};

export default S20;
