import React, { useMemo } from "react";
import { isMobileOnly } from "react-device-detect";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({ images }) => {
  const handleSize = useMemo(() => (isMobileOnly ? "360px" : "1280px"), []);
  return (
    <div>
      <SimpleImageSlider
        width={handleSize}
        height={340}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;
