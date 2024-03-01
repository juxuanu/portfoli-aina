import { FC } from "react";
import hopperImg from "../../images/llibres/portfoli-005.jpg";
import ojosDeMonaImg from "../../images/llibres/portfoli-003.jpg";
import margalidaSolivellasImg from "../../images/llibres/portfoli-002.jpg";
import aPropositoDeLasMujeresImg from "../../images/llibres/portfoli-001.jpg";
import Image from "next/image";

export const Cobertes: FC = () => (
  <article
    className={
      "flex flex-col flex-nowrap content-between items-start justify-between space-y-8 pt-5 text-sm md:flex-row md:space-y-0"
    }
  >
    <div className={"mx-4 h-fit px-4 md:mb-auto md:w-1/4"}>
      <h2 className={"mb-4 text-2xl font-bold"}>Disseny de cobertes</h2>
      <p className={"font-normal md:text-xl"}>
        pels segells editorials La Campana i Lumen de Penguin Random House
      </p>
    </div>
    <div className={"mx-4 h-fit px-4 md:mr-0 md:w-3/4 md:pr-0"}>
      <Carrusel />
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

const Carrusel: FC = () => (
  <div className="carousel carousel-center max-w-md space-x-4 bg-transparent p-4 md:hidden">
    <div className="carousel-item">
      <IllesEscapcades />
    </div>
    <div className="carousel-item">
      <APropositoDeLasMujeres />
    </div>
    <div className="carousel-item">
      <Hopper />
    </div>
    <div className="carousel-item">
      <OjosDeMona />
    </div>
  </div>
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
