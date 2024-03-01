import { FC } from "react";

export const Cobertes: FC = () => (
  <article
    className={
      "flex flex-col flex-nowrap content-between items-start justify-between space-y-8 pt-5 text-sm md:flex-row md:items-baseline"
    }
  >
    <div className={"mx-4 h-fit px-4 md:w-1/4"}>
      <h2 className={"mb-4 text-2xl font-bold"}>Disseny de cobertes</h2>
      <p className={"font-normal"}>
        pels segells editorials La Campana i Lumen de Penguin Random House
      </p>
    </div>
    <div className={"mx-4 h-fit px-4 md:w-3/4"}></div>
  </article>
);
