"use client";

import type { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  APropositoDeLasMujeres,
  Hopper,
  IllesEscapcades,
  OjosDeMona,
} from "./images";
import { Carousel } from "react-responsive-carousel";

const Carrusel: FC = () => {
  return (
    <div className="mx-auto w-full md:hidden">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
      >
        <APropositoDeLasMujeres />
        <Hopper />
        <IllesEscapcades />
        <OjosDeMona />
      </Carousel>
    </div>
  );
};

export default Carrusel;
