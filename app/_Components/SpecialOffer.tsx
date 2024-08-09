import Image from "next/image";
import { inter, lato, poppins } from "../_Utils/fonts";
import team from "../_Assets/Team goals-rafiki.png";
import Button from "./Button";

export default function SpecialOffer(){
    return(
        <div  className="w-full flex flex-col px-4 md:flex-row py-16  bg-cyellow bg-opacity-10 md:px-[90px] xl:my-24 my-12">
        <div data-aos="fade-down-right" className="w-full md:w-1/2 flex px-4  flex-col gap-4 lg:gap-6 xl:gap-8 ">
          <div className="flex flex-col gap-4">
            <h6 className={`${inter.className} text-cyellow uppercase `}>Egyedi ajánlat!</h6>
            <h3 className={`${poppins.className} h2`}>
              Webfejlesztés szinte ingyen!
            </h3>
            <p className={`${lato.className} p1`}>
              Az <span className="font-bold"> N&M Web</span>  elindulása alkalmából teljesen ingyenes fejlesztési
              költségi akciót hírdetünk. <br />
              Célünk, hogy
              <span className="text-cyellow font-bold"> együtt növekedjünk.</span> <br />
              Így az
              első 3 ügyfélnek , fejlesztési költségektől <br />
              mentesen készítünk
              weboldalt.
            </p>
            <p className={`${lato.className} text-cyellow mt-4 font-bold  text-xl`}>
              Ne hagyd ki ezt az egyedi ajánlatot, <br /> és kérj ajánlatot még ma!
            </p>
          </div>
        
          <Button 
          text="Ajánlatot kérek" 
          type="primary"
          navigate
          navigateTo="/contact"></Button>
       
        </div>
        <div data-aos="fade-down-right" className="w-full md:w-1/2 h-[450px] flex ">
          <Image
            src={team}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    )
}