import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";
import team from "../_Assets/Team goals-rafiki.png";
import Button from "./Button";

export default function SpecialOffer(){
    return(
        <div data-aos="fade-down-right" className="w-full flex flex-col md:flex-row  bg-cyellow bg-opacity-10 md:px-[90px] ">
        <div className="w-full md:w-1/2 flex p-4 flex-wrap">
          <div>
            <h6 className={`${inter.className} text-cyellow uppercase ml-3`}>Egyedi ajánlat!</h6>
            <h3 className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 md:text-3xl font-bold m-3`}>
              Webfejlesztés szinte ingyen!
            </h3>
            <p className={`${lato.className} text-base md:m-3  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}>
              Az <span className="font-bold"> N&M Web</span>  elindulása alkalmából teljesen ingyenes fejlesztési
              költségi akciót hírdetünk. <br />
              Célünk, hogy
              <span className="text-cyellow font-bold"> együtt növekedjünk.</span> <br />
              Így az
              első 3 ügyfélnek , fejlesztési költségektől <br />
              mentesen készítünk
              weboldalt.
            </p>
            <p className={`${lato.className} text-cyellow mt-4 font-bold ml-3 text-xl`}>
              Ne hagyd ki ezt az egyedi ajánlatot, <br /> és kérj ajánlatot még ma!
            </p>
          </div>
          <div className="ml-3 mt-3">
            <Button text="Ajánlatot kérek" type="primary"></Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[450px] flex p-2">
          <Image
            src={team}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    )
}