import { CV } from "./_components/cv";
import { Portada } from "./_components/portada";

export default function Home() {
  return (
    <main className={"space-y-4 mb-8"}>
      <Portada />
      <CV />
    </main>
  );
}
