import React from "react";
import Image from "next/image";
import { Images } from "@/assets/images";

const Beranda = () => {
  return (
    <main className="">
      <section className="" id="banner-page">
        <Image
          src={Images.banner1}
          alt="logo1"
          className="w-full h-[300px] rounded-md"
        ></Image>
      </section>
    </main>
  );
};

export default Beranda;
