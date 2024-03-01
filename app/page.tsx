import { CV } from "./_components/cv";
import { Portada } from "./_components/portada";
import { Cobertes } from "./_components/cobertes";

export default function Home() {
  return (
    <main className={"mb-8 space-y-6"}>
      <Portada />
      <CV />
      <Cobertes />
    </main>
  );
}
