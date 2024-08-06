import Image from "next/image";
import charts from "../_Assets/Charts-pana.png";
import arrow from "../_Assets/arrow.png";
import { lato, poppins } from "../_Utils/fonts";
import Button from "./Button";
export default function ImporantWebsite(){
    return(
        <div className="w-full mt-24  flex flex-col md:flex-row h-fit">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="rounded-full bg-gradient-to-br from-customStart to-customEnd w-2/3">
            <Image
              src={charts}
              alt="logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex  items-center justify-center p-4">
          <div className="flex md:items-start items-center flex-col gap-4">
            <div className="flex relative ">
              <h3 className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 font-bold  `}>
                Miért van szüksége egy vállalkozásnak weboldalra?
              </h3>
              <div className="md:right-[170px] lg:-right-[10px] right-[95px] md:bottom-6 bottom-3 w-[50px] h-[20px] md:h-1/12 absolute">
                <Image
                  src={arrow}
                  alt="logo"
                  className="-rotate-40 translate-y-5  w-[30px] md:w-full"
                />
              </div>
            </div>
            <p className={`${lato.className} text-base md:m-3  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}>
              Egy vállalkozásnak weboldalra van szüksége, mert ez biztosítja az
              online jelenlétet és növeli a hitelességet. Lehetővé teszi a
              termékek és szolgáltatások bemutatását, valamint az ügyfelekkel
              való kapcsolattartást. Emellett a jól optimalizált weboldal segít
              az új ügyfelek megszerzésében és az üzleti növekedésben.
            </p>
            <Button text="Tovább a blogra" type="secondary"></Button>
          </div>
        </div>
      </div>
    )
}