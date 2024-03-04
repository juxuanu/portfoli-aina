"use client";

import { FC, useRef } from "react";
import ImageGallery from "react-image-gallery";
import hopperImg from "../../../images/llibres/portfoli-005.jpg";
import ojosDeMonaImg from "../../../images/llibres/portfoli-003.jpg";
import margalidaSolivellasImg from "../../../images/llibres/portfoli-002.jpg";
import aPropositoDeLasMujeresImg from "../../../images/llibres/portfoli-001.jpg";

const Carrusel: FC = () => {
  const galleryRef = useRef<ImageGallery>(null);

  return (
    <div className="max-w-md space-x-4 bg-transparent p-4 md:hidden">
      <ImageGallery
        ref={galleryRef}
        lazyLoad={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        autoPlay={true}
        slideInterval={2_500}
        onTouchStart={() => galleryRef.current && galleryRef.current.pause()}
        items={[
          {
            original: hopperImg.src,
            originalAlt: "Coberta 'Hopper'",
          },
          {
            original: ojosDeMonaImg.src,
            originalAlt: "Coberta 'Los ojos de Mona'",
          },
          {
            original: margalidaSolivellasImg.src,
            originalAlt: "Coberta 'Illes escapçades'",
          },
          {
            original: aPropositoDeLasMujeresImg.src,
            originalAlt: "Coberta 'A propósito de las mujeres'",
          },
        ]}
      />
    </div>
  );
};

export default Carrusel;
