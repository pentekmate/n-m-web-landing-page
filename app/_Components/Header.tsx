
import Image from "next/image";
import Button from "./Button";
import downArrow from "../_Assets/down-arrow.png";
import creator from "../_Assets/Website Creator-rafiki.png";
import { lato, poppins } from "../_Utils/fonts";

import { useEffect } from "react";

export default function Header(){
  
    return(
        <div data-aos="fade-up" className="w-full flex flex-col  md:px-[90px] md:flex-row h-fit">
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="flex justify-center items-center md:items-start flex-col gap-8 md:gap-20">
                    <div className="flex  items-center md:items-start flex-col gap-8">
                    <h3 className={`text-[2rem] md:text-[30px] lg:text-[61px] font-bold  ${poppins.className}`}>
                        Egyedi webfejlesztés
                    </h3>
                    <p className={`text-base md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px] ${lato.className}`}>
                        Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek. <br />
                        Megoldásainkat azok az üzemeltetők választják, akiknek <br /> fontos az
                        egyedi megjelenés és a működés hosszú távon.
                    </p>

                    </div>

                    <div className="flex flex-col w-full md:flex-row md:justify-start justify-center gap-4">
                    <Button text="tudj meg többet" type="secondary" icon={
                        <Image
                        src={downArrow}
                        alt="logo"
                        width={15}
                        height={15}
                        className="ml-2 md:ml-3"
                    />}></Button>
                    <Button text="ajánlatot kérek" type="primary"></Button>
                    </div>

                </div>
            </div>
            <div className="w-full md:w-1/2 flex p-4">
            <Image
                src={creator}
                alt="logo"
                className="w-full h-full object-contain"
            />
            </div>
      </div>
    )
}