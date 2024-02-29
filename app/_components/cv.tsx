import { FC, JSX } from "react";

export const CV: FC = () => (
  <article
    className={
      "flex flex-col md:flex-row md:items-baseline flex-nowrap items-start text-sm pt-5 space-y-8"
    }
  >
    <div className={"md:border-l border-gray-950 mx-4 px-4 h-fit"}>
      <Estudis />
      <Idiomes />
      <Programari />
    </div>
    <div className={"md:border-l border-gray-950 mx-4 px-4 h-fit"}>
      <Experiencia />
    </div>
    <div className={"md:border-l border-gray-950 mx-4 px-4 h-fit"}>
      <DadesInteres />
    </div>
  </article>
);

const Estudis: FC = () => (
  <>
    <h2 className={"font-bold text-2xl mb-4"}>Estudis</h2>
    <ul>
      <li>
        <h3 className={"font-bold"}>Estudis superiors de disseny gràfic</h3>
        <p className={"font-normal"}>
          ESCOLA D’ART I SUPERIOR DE DISSENY DE LES ILLES BALEARS (2016—2020)
        </p>
        <h4 className={"font-bold pl-4 mt-2"}>Erasmus</h4>
        <p className={"font-normal pl-4"}>
          ÉCOLE SUPÉRIEURE D’ARTS APPLIQUÉS ET TEXTILE (setembre—desembre 2018)
        </p>
      </li>
      <li>
        <h3 className={"font-bold mt-4"}>
          Postgrau de Fotografia i Disseny Editorial
        </h3>
        <p className={"font-normal"}>
          EINA, CENTRE UNIVERSITARI DE DISSENY I ART DE BARCELONA (2021—2022)
        </p>
      </li>
    </ul>
  </>
);

const Idiomes: FC = () => (
  <>
    <h2 className={"font-bold text-2xl mb-4 mt-5"}>Idiomes</h2>
    <ul className={"space-y-2"}>
      <li className={"font-normal"}>
        <span className={"font-bold"}>Català</span>: Nivell C1 (Llengua materna)
      </li>
      <li className={"font-normal"}>
        <span className={"font-bold"}>Castellà</span>: Nivell C1 (Llengua
        materna)
      </li>
      <li className={"font-normal"}>
        <span className={"font-bold"}>Anglès</span>: Nivell B2
      </li>
      <li className={"font-normal"}>
        <span className={"font-bold"}>Francès</span>: Nivell A2
      </li>
    </ul>
  </>
);

const Programari: FC = () => (
  <>
    <h2 className={"font-bold text-2xl mb-4 mt-5"}>Programari</h2>
    <ul className={"space-y-2 font-semibold"}>
      <li>
        <p>Adobe InDesign</p>
      </li>
      <li>
        <p>Adobe Illustrator</p>
      </li>
      <li>
        <p>Adobe Photoshop</p>
      </li>
      <li>
        <p>Adobe Lightroom</p>
      </li>
      <li>
        <p>Adobe XD/Figma</p>
      </li>
    </ul>
  </>
);

const Experiencia: FC = () => (
  <>
    <h2 className={"font-bold text-2xl mb-4"}>Experiència</h2>
    <ul className={"space-y-2"}>
      <li>
        <h3 className={"font-bold"}>Penguin Random House Grupo Editorial</h3>
        <p className={"font-normal"}>EMPRESA EDITORIAL</p>
        <p className={"font-normal pl-4"}>
          Pràctiques de postgrau (març — juny 2022, 300h)
          <br />
          Dissenyadora tècnica (setembre 2022 — actualitat)
        </p>
      </li>
      <li>
        <h3 className={"font-bold"}>Fantastic Mr. Nilsson</h3>
        <p className={"font-normal"}>AGÈNCIA CREATIVA</p>
        <p className={"font-normal pl-4"}>
          Projecte editorial d’un catàleg de roba infantil tardor/hivern per My
          Little Cozmo (novembre — desembre 2021, 40 dies)
          <br />
          Projecte editorial d’un catàleg de roba infantil primavera/estiu per
          My Little Cozmo (juny — juliol 2022, 40 dies)
        </p>
      </li>
      <li>
        <h3 className={"font-bold"}>Dissenyadora gràfica freelance</h3>
        <p className={"font-normal"}>
          CREACIÓ DE LOGOTIPS, CARTES DE RESTAURANT, TARGETES, CARTELLS,
          CALENDARIS… (2019 — actualitat)
        </p>
      </li>
      <li>
        <h3 className={"font-bold"}>We Are Yellow</h3>
        <p className={"font-normal"}>AGÈNCIA MÀRQUETING I PUBLICITAT</p>
        <p className={"font-normal"}>
          Pràctiques de grau (juliol — setembre 2020, 200h)
        </p>
      </li>
      <li>
        <h3 className={"font-bold"}>Imprenta Bahía</h3>
        <p className={"font-normal"}>EMPRESA D’IMPRESSIÓ I ARTS GRÀFIQUES</p>
        <p className={"font-normal"}>
          Pràctiques de grau (febrer — març 2020, 100h)
        </p>
      </li>
    </ul>
  </>
);

const DadesInteres: FC = () => (
  <>
    <h2 className={"font-bold text-2xl mb-4"}>Dades d&apos;interès</h2>
    <ul className={"space-y-2 font-semibold"}>
      <li>
        <p>Capacitat d’organització davant grans volums de feina</p>
      </li>
      <li>
        <p>Capacitat de gestionar diferents projectes alhora</p>
      </li>
      <li>
        <p>Capacitat de treballar tant en equips grans com en petits</p>
      </li>
      <li>
        <p>
          Capacitat comunicativa i empàtica tant amb clients com amb companys de
          feina
        </p>
      </li>
      <li>
        <p>Perfeccionisme i treball al mm</p>
      </li>
      <li>
        <p>Coneixements d’AAFF</p>
      </li>
      <li>
        <p>Aprenentatge ràpid</p>
      </li>
    </ul>
  </>
);
