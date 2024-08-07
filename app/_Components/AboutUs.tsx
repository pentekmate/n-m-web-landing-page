import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";
import User from "../_Assets/User research-bro.png";
import Button from "./Button";

export default function AboutUs(){
    return(
        <div data-aos="fade-left" className="w-full flex flex-col mt-24 md:flex-row h-fit ">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full md:w-1/2 flex p-4">
            <Image
              src={User}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex  items-center justify-center p-4">
          <div className="flex md:items-start items-center flex-col gap-4">
            <h3 className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 font-bold  `}>
              Rólunk egy pár szó..
            </h3>
            <p className={`${lato.className} text-base mb-6  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}>
              Csapatunk 2024ben alakult, jelenleg 2főt számlál. Mögöttünk több
              év fejlesztésben szerzett tapasztalat. Csapatunk tagjai dolgoztak
              már egészségügyi szoftvereken,időpont foglaló rendszereken,
              különböző weboldalakon. Imádjuk a kihívásokat, és a különböző
              érdekesebbnél érdekesebb projekteket. Ha kérdésed van nyugodtan
              keress minket!
            </p>
            <Button
            text="Kérdésem van"
            type="secondary"
            navigate
            navigateTo="/contact"></Button>
          </div>
        </div>
      </div>
    )
}