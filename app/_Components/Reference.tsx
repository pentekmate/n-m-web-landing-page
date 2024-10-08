// components/ToggleDiv.js
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";

import plus from "../_Assets/plus.png";
import Form from "./Form";
import Link from "next/link";
import ToggleDiv from "./ToggleDiv";

type ReferneceProps={
  id:string
}

export default function Reference({id}:ReferneceProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setTimeout(() => {
      if(isVisible===false){
        ScrollToElement()
      }
    }, 200);
  };

  function ScrollToElement(){
    const scrolltoElement = document.getElementById('referenceForm')
    if(scrolltoElement)
      window.scrollTo({
        top:scrolltoElement.offsetTop-250,
        behavior:'smooth'
      })
       
  }

  return (
    <>
      <div
        id={id}
        className="w-full bg-cyellow py-10 flex px-4 md:justify-center xl:mt-24 md:items-center flex-col md:px-[90px] mt-12"
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
      <ToggleDiv formId="referenceForm" isVisible={isVisible}></ToggleDiv>
    </>
  );
}
