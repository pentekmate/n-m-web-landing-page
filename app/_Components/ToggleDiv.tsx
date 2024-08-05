// components/ToggleDiv.js
"use client";

import { useState } from "react";
import Image from "next/image";

import plus from "../_Assets/plus.png";

export default function ToggleDiv() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="w-full bg-cyellow p-10 flex justify-center items-center flex-col">
        <h3 className="text-2xl md:text-3xl font-bold m-3 text-white text-center">
          Referenciák
        </h3>
        <p className="text-center w-1/2 m-3">
          Frissen indult vállalkozásként, a munka tapasztalatunkok kívül sokat
          nem tudunk mutatni. Ezeket <span className="font-bold">itt</span>{" "}
          megtekintheted. Legyen a{" "}
          <span className="text-white font-bold">Tied</span> a megtiszteltetés,
          hogy elsők között választod a Mi szolgáltatásainkat.{" "}
        </p>

        <div
          className={` border-white hover:shadow-2xl transition-all duration-300 flex flex-col w-[277px] h-[277px] items-center justify-center rounded-2xl border-dashed border-8 mt-4 cursor-pointer`}
          onClick={toggleVisibility}
        >
          <Image src={plus} alt="logo" className="mb-4" />
          <p className="text-center text-white mt-4">A te vállalkozásod</p>
        </div>
      </div>
      <div className={` ${isVisible? "extended m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10" : "closed"} transition-all duration-500 flex flex-col  items-center space-y-4 `}>
        {isVisible &&
        <>
        <h3 className="text-3xl font-bold text-center">
          Megtetted első lépésed,
        </h3>
        <p className="text-center">
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
            type="tel"
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
