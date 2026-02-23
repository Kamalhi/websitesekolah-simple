import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between gap-2 bg-gray-700 md:px-28 py-2">
        <div className="text-white">
          <p className="uppercase md:text-[1.5rem] font-extrabold text-center">
            sekolah<span className="font-bold">.</span>
          </p>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-3 text-white">
            <p className="font-bold md:text-[16px]">Tentang Kami</p>
            <div className="">
              <ul className="text-[12px] space-y-1.5">
                <li>
                  <a href="">Profil</a>
                </li>
                <li>
                  <a href="">Visi & Misi</a>
                </li>
                <li>
                  <a href="">Struktur Organisasi</a>
                </li>
                <li>
                  <a href="">Sambutan Kepala Sekolah</a>
                </li>
                <li>
                  <a href="">Fasilitas</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <p className="font-bold md:text-[16px]">Informasi</p>
            <div>
              <ul className="text-[12px] space-y-1.5">
                <li>
                  <a href="">Layanan</a>
                </li>
                <li>
                  <a href="">Kalender Pendidikan</a>
                </li>
                <li>
                  <a href="">Penerimaan Siswa Baru</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <p className="font-bold md:text-[16px]">Lokasi</p>
            <div>
              <p className="">Jl. Haji Haji, Timur Laut, Pulau Jawa, Pusat</p>
            </div>
            <div className="flex gap-2">
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
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-800 text-white px-10 py-3">
        <p className="md:text-[16px]">
          <span
            className="md:text-[16px] font-bold
          "
          >
            SEKOLAH.
          </span>{" "}
          &copy; {new Date().getFullYear()}{" "}
          <span className="italic">All rights reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
