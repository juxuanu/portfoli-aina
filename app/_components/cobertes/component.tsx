import type { FC } from "react";
import {
  APropositoDeLasMujeres,
  Hopper,
  IllesEscapcades,
  OjosDeMona,
} from "./images";
import Carrusel from "./carrusel";

const Cobertes: FC = () => (
  <article
    className={
      "flex flex-col flex-nowrap content-between items-center justify-between space-y-8 pt-5 text-sm md:flex-row md:space-y-0"
    }
  >
    <div className={"mx-4 h-fit px-4 md:mb-auto md:w-1/4"}>
      <h2 className={"mb-4 text-2xl font-bold"}>Disseny de cobertes</h2>
      <p className={"font-normal md:text-xl"}>
        pels segells editorials La Campana i Lumen de Penguin Random House
      </p>
    </div>
    <div className={"h-fit md:mr-0 md:w-3/4 md:pr-0"}>
      <Carrusel />
      <Collage />
    </div>
  </article>
);

const Collage: FC = () => (
  <div
    className={
      "ml-auto hidden h-fit w-fit grid-cols-2 grid-rows-2 content-center items-center gap-4 md:grid"
    }
  >
    <IllesEscapcades />
    <APropositoDeLasMujeres />
    <Hopper />
    <OjosDeMona />
  </div>
);

export default Cobertes;
