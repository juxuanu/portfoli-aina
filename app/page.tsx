import { CV } from "./_components/cv";
import { Portada } from "./_components/portada";

export default function Home() {
  return (
    <main className={"mb-8 space-y-4"}>
      <Portada />
      <CV />
    </main>
  );
}
