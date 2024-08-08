import Image from "next/image";

import { inter, lato, poppins } from "../_Utils/fonts";

import email from "../_Assets/email.png";
import telo from "../_Assets/mobile.png";
import facebook from "../_Assets/facebook.png";
import logo from "../_Assets/logo-no-background.png";

export default function Footer() {

  return (
    <>
      <div data-aos="fade-up" data-aos-once className="w-full bg-fgrey flex flex-wrap p-8 text-white">
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={75}
              height={75}
              className="m-3"
            />
            <h1 className={`${poppins.className} text-white font-bold text-xl ml-2`}>N&M Web</h1>
          </div>
          <p className={`${lato.className} text-white`}>
            Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek.
            Megoldásainkat azok az üzemeltetők választják, akiknek fontos az
            egyedi megjelenés és a működés hosszú távon.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className={`${poppins.className} text-white font-bold text-xl`}>Navigáció</h3>
          <ul className={`${lato.className} space-y-2`}>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            <li className="hover:text-gray-400 cursor-pointer">Kapcsolat</li>
            <li className="hover:text-gray-400 cursor-pointer">Rólunk</li>
            <li className="hover:text-gray-400 cursor-pointer">Csomagok</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className={`${poppins.className} text-white font-bold text-xl`}>Kapcsolat</h3>
          <div className={`${lato.className} flex items-center space-x-2`}>
            <Image src={email} alt="email logo" className="w-6 h-6" />
            <p>email@email.com</p>
          </div>
          <div className={`${lato.className} flex items-center space-x-2`}>
            <Image src={telo} alt="phone logo" className="w-6 h-6" />
            <p>+36704228587</p>
          </div>
          <div className={`${lato.className} flex items-center space-x-2`}>
            <Image src={facebook} alt="facebook logo" className="w-6 h-6" />
            <p>facebook</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className={`${poppins.className} text-white font-bold text-xl`}>Egyéb linkek</h3>
          <p className={`${lato.className} hover:text-gray-400 cursor-pointer`}>FAQ</p>
        </div>
        <div className={`${lato.className} w-full h-[25px] bg-fgrey text-white pl-4 text-xs flex items-center justify-center`}>
          COPYRIGHT @ 2024 Minden jog fenttartva
        </div>
      </div>
    </>
  );
}
