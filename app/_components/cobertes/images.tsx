import type { FC } from "react";
import Image from "next/image";
import margalidaSolivellasImg from "../../../images/llibres/portfoli-002.jpg";
import aPropositoDeLasMujeresImg from "../../../images/llibres/portfoli-001.jpg";
import hopperImg from "../../../images/llibres/portfoli-005.jpg";
import ojosDeMonaImg from "../../../images/llibres/portfoli-003.jpg";

const IllesEscapcades: FC = () => (
  <Image
    placeholder={"blur"}
    src={margalidaSolivellasImg}
    alt={"Coberta 'Illes escapçades'"}
  />
);
const APropositoDeLasMujeres: FC = () => (
  <Image
    placeholder={"blur"}
    src={aPropositoDeLasMujeresImg}
    alt={"Coberta 'A propósito de las mujeres'"}
  />
);
const Hopper: FC = () => (
  <Image placeholder={"blur"} src={hopperImg} alt={"Coberta 'Hopper'"} />
);
const OjosDeMona: FC = () => (
  <Image
    placeholder={"blur"}
    src={ojosDeMonaImg}
    alt={"Coberta 'Los ojos de Mona'"}
  />
);

export { IllesEscapcades, APropositoDeLasMujeres, Hopper, OjosDeMona };
