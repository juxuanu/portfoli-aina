import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import aina from "../../images/aina.png";

export const Portada: FC = () => (
  <article className="flex flex-col flex-nowrap md:flex-row">
    <div className={"mx-8 my-10 md:w-[55%]"}>
      <h1 className={"text-5xl font-black uppercase md:text-7xl"}>portfoli</h1>
      <h2 className={"mt-4 text-2xl font-bold capitalize"}>
        aina delgado solivellas
      </h2>
      <p>dissenyadora gràfica</p>
      <p className={""}>
        <Link href={"https://www.instagram.com/ainadelsol/"}>@ainadelsol</Link>
      </p>
      <br />
      <p className={"font-light"}>
        <Link href={"tel:601037048"}>601 037 048</Link>
      </p>
      <p className={"font-light"}>Calafell — Barcelona</p>
      <p className={"font-light"}>
        <Link href={"mailto:ainadelsol.disseny@gmail.com"}>
          ainadelsol.disseny@gmail.com
        </Link>
      </p>
    </div>
    <div className={"md:w-[45%]"}>
      <Image
        src={aina}
        alt={"Aina Delgado Solivellas"}
        placeholder={"blur"}
        className={"h-auto w-full"}
      />
    </div>
  </article>
);
