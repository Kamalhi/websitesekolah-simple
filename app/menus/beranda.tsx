"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Images } from "@/assets/images";

const Beranda = () => {
  const banners = [Images.banner1, Images.banner2, Images.banner3];

  const [current, setCurrent] = useState(0);
  const [isHouvering, setIsHouvering] = useState(false);

  useEffect(() => {
    if (isHouvering) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [isHouvering, banners.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };
  return (
    <main className="relative">
      <section
        className="relative h-screen w-full"
        id="banner-page"
        onMouseEnter={() => setIsHouvering(true)}
        onMouseLeave={() => setIsHouvering(false)}
      >
        {banners.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`banner-${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            ></Image>
          </div>
        ))}
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60 transition hover:cursor-pointer"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/60 transition hover:cursor-pointer"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition hover:cursor-pointer ${
                index === current ? "bg-white scale-110" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </section>
      <section className="min-h-screen bg-gray-100 p-10">
        <h2 className="text-2xl font-bold">Content Ringan</h2>
        <p>Isi konten disini...</p>
      </section>
    </main>
  );
};

export default Beranda;
