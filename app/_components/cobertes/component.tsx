import { FC } from "react";
import hopperImg from "../../../images/llibres/portfoli-005.jpg";
import ojosDeMonaImg from "../../../images/llibres/portfoli-003.jpg";
import margalidaSolivellasImg from "../../../images/llibres/portfoli-002.jpg";
import aPropositoDeLasMujeresImg from "../../../images/llibres/portfoli-001.jpg";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";
import dynamic from "next/dynamic";

const DynamicCarrusel = dynamic(() => import("./carrusel"), {
  loading: () => (
    <div
      role="status"
      className="mx-auto size-[318px] animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse"
    >
      <div className="flex h-full w-full items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  ),
});

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
    <div className={"mx-4 h-fit px-4 md:mr-0 md:w-3/4 md:pr-0"}>
      <DynamicCarrusel />
      <Collage />
    </div>
  </article>
);

const IllesEscapcades: FC = () => (
  <Image src={margalidaSolivellasImg} alt={"Coberta 'Illes escapçades'"} />
);
const APropositoDeLasMujeres: FC = () => (
  <Image
    src={aPropositoDeLasMujeresImg}
    alt={"Coberta 'A propósito de las mujeres'"}
  />
);
const Hopper: FC = () => <Image src={hopperImg} alt={"Coberta 'Hopper'"} />;
const OjosDeMona: FC = () => (
  <Image src={ojosDeMonaImg} alt={"Coberta 'Los ojos de Mona'"} />
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
