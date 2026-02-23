"use client";

import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<"program" | "informasi" | null>(null);
  const dropDownRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full z-50">
        <nav className="bg-[#E6E6E6] w-full h-[50px] flex items-center px-10 justify-between">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 cursor-pointer"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="md:text-[14px]">&#40;0285&#41; 1234567</p>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 cursor-pointer"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            {/*  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 cursor-pointer"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            {/*  */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 cursor-pointer"
            >
              <path d="M 12.206743,0.50098757 A 11.375334,10.816589 0 0 0 0.83140972,11.317576 11.375334,10.816589 0 0 0 2.7887669,17.382895 l -2.4239235,6.251227 7.929407,-2.159093 A 11.375334,10.816589 0 0 0 12.206743,22.134165 11.375334,10.816589 0 0 0 23.582077,11.317576 11.375334,10.816589 0 0 0 12.206743,0.50098757 Z" />
              <path d="M 14.351272,16.103438 C 10.688867,15.732442 7.6125204,12.146405 7.3215174,7.5481214 7.4237041,7.043336 7.7206918,6.7179721 8.1560958,6.4209479 8.8532155,5.971263 9.4620921,5.9641229 10.099562,5.8767442 c 0.371181,0.0166 0.744841,0.013071 1.083857,0.2910857 0.159906,0.7424797 0.397617,1.4849593 0.822234,2.227439 -0.07096,0.6025171 -0.331036,0.8208121 -0.560615,1.1010641 0.289374,1.571285 0.989417,2.203894 1.806427,2.569149 0.315416,-0.310801 0.608751,-0.657489 1.083856,-0.708731 0.668133,0.203062 1.18719,0.243625 1.806426,0.265774 0.459119,0.468638 0.543309,0.869853 0.573073,1.32887 0.03041,0.763572 -0.0048,1.527146 -0.336368,2.290719 -0.481378,0.705493 -1.743986,0.910673 -2.02718,0.861324 z" />
            </svg>
            {/*  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </nav>
        {/* bg-[#D4D4D4]/70 backdrop-blur-lg w-full h-[80px] flex items-center p-10 justify-between */}
        <nav
          className={`w-full h-[80px] flex items-center p-10 justify-between transition-all duration-300 ease-in-out ${
            scrolled ? "bg-[#D4D4D4] shadow-md" : "bg-white/40 backdrop-blur-md"
          }`}
        >
          <h1 className="text-center uppercase md:text-[2rem] font-extrabold">
            Sekolah<span className="text-[#330000] font-bold">.</span>
          </h1>
          <ul ref={dropDownRef} className="flex gap-12 items-center">
            <li>
              <a href="#" className="md:text-[16px] text-[12px] hover:">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="md:text-[16px] text-[12px]">
                Tentang Kami
              </a>
            </li>
            <li className="relative group">
              <button
                className="md:text-[16px] text-[12px] flex justify-between gap-3 hover:cursor-pointer items-center"
                onClick={() => setOpen(open === "program" ? null : "program")}
              >
                Program
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-5 transition-transform duration-200 ${
                    open === "program" ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-1.5 w-[160px] bg-white shadow-md rounded-md p-2 transition-all duration-200 origin-top ${
                  open === "program"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Program A</a>
                </li>
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Program B</a>
                </li>
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Program C</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button
                className="md:text-[16px] text-[12px] flex justify-between gap-3 hover:cursor-pointer items-center"
                onClick={() =>
                  setOpen(open === "informasi" ? null : "informasi")
                }
              >
                Informasi
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-5 transition-transform duration-200 ${
                    open === "informasi" ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul
                className={`absolute left-0 mt-1.5 w-[160px] bg-white shadow-md rounded-md p-2 transition-all duration-200 origin-top ${
                  open === "informasi"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Informasi A</a>
                </li>
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Informasi B</a>
                </li>
                <li className="hover:bg-gray-600 rounded-md px-2 py-1 hover:text-white transition-colors duration-200 ease-in-out">
                  <a href="#">Informasi C</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="md:text-[16px] text-[12px]">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
