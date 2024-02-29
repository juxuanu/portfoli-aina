import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import aina from "../_images/aina.png";

export const Portada: FC = () => (
  <article className="flex flex-col md:flex-row flex-nowrap">
    <div className={"md:w-[55%] my-10 mx-8"}>
      <h1 className={"font-black md:text-7xl text-5xl uppercase"}>portfoli</h1>
      <h2 className={"font-bold capitalize text-2xl mt-4"}>
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
        className={"w-full h-auto"}
      />
    </div>
  </article>
);
