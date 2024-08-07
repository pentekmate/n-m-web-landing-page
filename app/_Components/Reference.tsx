// components/ToggleDiv.js
"use client";

import { useState } from "react";
import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";

import plus from "../_Assets/plus.png";

export default function Reference() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div data-aos="fade-right" className="w-full bg-cyellow p-10 flex justify-center items-center flex-col md:px-[90px]">
        <h3 className={`${poppins.className} text-2xl lg:leading-[72px] text-white text-[2rem] md:text-[32px] lg:text-h2 md:text-3xl font-bold m-3`}>
          Referenciák
        </h3>
        <p className={`${lato.className} w-3/4 text-base md:m-3 text-center  px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}>
          Frissen indult vállalkozásként, a munka tapasztalatunkok kívül sokat
          nem tudunk mutatni. <br />
          Ezeket <span className={`${poppins.className} font-bold`}>itt</span> megtekintheted. <br /> 
          Legyen a{" "}
          <span className={`${poppins.className} text-white font-bold`}>Tied</span> a megtiszteltetés,
          hogy elsők között választod a Mi szolgáltatásainkat.{" "}
        </p>

        <div
          className={` border-white hover:shadow-2xl transition-all duration-300 flex flex-col w-[277px] h-[277px] items-center justify-center rounded-2xl border-dashed border-8 mt-4 cursor-pointer`}
          onClick={toggleVisibility}
        >
          <Image src={plus} alt="logo" className="mb-4" />
          <p className={`${poppins.className} text-center text-white mt-4`}>A te vállalkozásod</p>
        </div>
      </div>
      <div className={` ${isVisible? "extended m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10" : "closed"} transition-all duration-500 flex flex-col  items-center space-y-4 `}>
        {isVisible &&
        <>
        <h3 className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 md:text-3xl font-bold m-3`}>
          Megtetted első lépésed,
        </h3>
        <p className={`${lato.className} w-3/4 text-base md:m-3 text-center  px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}>
          A Siker felé, vedd fel velünk a kapcsolatot!
        </p>
        <div className="bg-cyellow bg-opacity-20 rounded-xl w-full sm:w-3/4 md:w-2/4 lg:w-2/4 flex flex-col items-center justify-center p-8 space-y-6">
          <input
            type="text"
            placeholder="Név"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <input
            type="email"
            placeholder="E-mail cím"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <input
            type="number"
            placeholder="Telefonszám"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <div className="w-full flex items-center space-x-2">
            <input type="checkbox" />
            <label className="italic">
              Hozzájárulok a megadott adataim kapcsolatfelvétel céljából
              történő kezeléséhez.
            </label>
          </div>
          <button className="bg-cyellow w-2/4 p-2 text-white rounded-full">
            Küldés
          </button>
        </div>
        </>
        }
      </div>
    </>
  );
}
