import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";
import User from "../_Assets/User research-bro.png";
import Button from "./Button";

export default function AboutUs(){
    return(
      <div  className="w-full  flex flex-col px-4 gap-4 md:flex-row h-fit md:px-[90px] my-12 xl:my-24">
      <div  data-aos="fade-up" className="w-full md:w-1/2 flex items-center justify-center">
        <div className="rounded-full bg-gradient-to-br from-customStart to-customEnd w-2/3">
          <Image
            src={User}
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div  className="w-full md:w-1/2 flex   items-center justify-center">
        <div  data-aos="fade-up" className="flex md:items-start items-center flex-col gap-4">
          <div className="flex flex-col gap-2">
              <div className="flex relative ">
                <h3 className={`${poppins.className} h2`}>
                  Rólunk egy pár szó..
                </h3>
                {/* <div className="md:right-[170px] lg:-right-[10px] right-[95px] md:bottom-6 bottom-3 w-[50px] h-[20px] md:h-1/12 absolute">
                  <Image
                    src={arrow}
                    alt="logo"
                    className="-rotate-40 translate-y-5  w-[30px] md:w-full"
                  />
                </div> */}
              </div>
              <p className={`${lato.className} p1`}>
              Csapatunk 2024ben alakult, jelenleg 2főt számlál. Mögöttünk több
              év fejlesztésben szerzett tapasztalat. Csapatunk tagjai dolgoztak
              már egészségügyi szoftvereken,időpont foglaló rendszereken,
              különböző weboldalakon. Imádjuk a kihívásokat, és a különböző
              érdekesebbnél érdekesebb projekteket. Ha kérdésed van nyugodtan
              keress minket!
              </p>
              
          </div>
          <div className="w-full">
          <Button
           text="Kérdésem van"
           type="secondary"
           navigate
           navigateTo="/contact/#message"></Button>
          </div>

          
        </div> 
        
      </div>
  </div>
    )
}