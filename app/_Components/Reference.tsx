// components/ToggleDiv.js
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";

import plus from "../_Assets/plus.png";
import Form from "./Form";

export default function Reference() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div
       
        className="w-full bg-cyellow py-10 flex md:justify-center xl:mt-24 md:items-center flex-col md:px-[90px] mt-12"
      >
     <div  data-aos-once data-aos="fade-right" className="w-full flex flex-col items-center">
        <h3 className={`${poppins.className} h2`}> Referenciák </h3>
        <p className={`${lato.className} p1`}>
          Frissen indult vállalkozásként, a munka tapasztalatunkok kívül sokat
          nem tudunk mutatni. <br />
          Ezeket <span className={`${poppins.className} font-bold`}>
            itt
          </span>{" "}
          megtekintheted. <br />
          Legyen a{" "}
          <span className={`${poppins.className} text-white font-bold`}>
            Tied
          </span>{" "}
          a megtiszteltetés, hogy elsők között választod a Mi
          szolgáltatásainkat.{" "}
        </p>

        <div className="w-full flex justify-center">
          <div
              className={` border-white hover:shadow-2xl transition-all duration-300 flex flex-col px-4 py-4 h-1/2 py-4 md:py-4  lg:w-[200px] lg:h-[200px] xl:w-[277px] xl:h-[277px] items-center justify-center rounded-2xl border-dashed border-8 mt-4 cursor-pointer`}
              onClick={toggleVisibility}
            >
              <Image src={plus} alt="logo" className="mb-4" />
              <p className={`${poppins.className} text-center text-white mt-4`}>
                A te vállalkozásod
              </p>
            </div>
        </div>
     </div>
      </div>
      <div
        className={` ${
          isVisible ? "  lg:h-[600px] xl:h-[750px]  m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10" : "h-[0px]"
        } transition-all duration-500 flex flex-col  items-center space-y-4 `}
      >
        {isVisible && (
          <>
            <h3
              className={`${poppins.className} h2`}
            >
              Megtetted első lépésed,
            </h3>
            <p
              className={`${lato.className} p1`}
            >
              A Siker felé, vedd fel velünk a kapcsolatot!
            </p>

            <Form tier />
          </>
        )}
      </div>
    </>
  );
}
