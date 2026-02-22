import Image from "next/image";

import Beranda from "./menus/beranda";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden px-10">
      <Beranda />
    </main>
  );
}
