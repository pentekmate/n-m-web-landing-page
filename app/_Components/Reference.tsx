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
        data-aos="fade-right"
        data-aos-once
        className="w-full bg-cyellow p-10 flex justify-center items-center flex-col md:px-[90px]"
      >
        <h3
          className={`${poppins.className} text-2xl lg:leading-[72px] text-white text-[2rem] md:text-[32px] lg:text-h2 md:text-3xl font-bold m-3`}
        >
          Referenciák
        </h3>
        <p
          className={`${lato.className} w-3/4 text-base md:m-3 text-center  px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}
        >
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

        <div
          className={` border-white hover:shadow-2xl transition-all duration-300 flex flex-col w-[277px] h-[277px] items-center justify-center rounded-2xl border-dashed border-8 mt-4 cursor-pointer`}
          onClick={toggleVisibility}
        >
          <Image src={plus} alt="logo" className="mb-4" />
          <p className={`${poppins.className} text-center text-white mt-4`}>
            A te vállalkozásod
          </p>
        </div>
      </div>
      <div
        className={` ${
          isVisible ? "extended m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10" : "closed"
        } transition-all duration-500 flex flex-col  items-center space-y-4 `}
      >
        {isVisible && (
          <>
            <h3
              className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 md:text-3xl font-bold m-3`}
            >
              Megtetted első lépésed,
            </h3>
            <p
              className={`${lato.className} w-3/4 text-base md:m-3 text-center  px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}
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
