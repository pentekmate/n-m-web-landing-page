import Image from "next/image";
import charts from "../_Assets/Charts-pana.png";
import arrow from "../_Assets/arrow.png";
import { lato, poppins } from "../_Utils/fonts";
import Button from "./Button";
export default function ImporantWebsite(){
    return(
        <div id="importantWebsite" className="w-full  flex flex-col md:flex-row gap-4 h-fit my-12 px-4 xl:my-24 md:px-[90px]">
          <div data-aos="fade-down-right" className="w-full md:w-1/2 flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-br from-customStart to-customEnd w-2/3">
              <Image
                
                src={charts}
                alt="logo"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div data-aos="fade-down-right"  className="w-full md:w-1/2 flex   items-center justify-center">
            <div className="flex  md:items-start items-center flex-col gap-4">
              <div className="flex flex-col gap-2">
                  <div className="flex relative ">
                    <h3 className={`${poppins.className} h2`}>
                      Miért van szüksége egy vállalkozásnak weboldalra?
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
                    Egy vállalkozásnak weboldalra van szüksége, mert ez biztosítja az
                    online jelenlétet és növeli a hitelességet. Lehetővé teszi a
                    termékek és szolgáltatások bemutatását, valamint az ügyfelekkel
                    való kapcsolattartást. Emellett a jól optimalizált weboldal segít
                    az új ügyfelek megszerzésében és az üzleti növekedésben.
                  </p>
              </div>
              <div className="w-full">
                <Button 
                text="Tovább a blogra" 
                type="secondary"
                navigate
                navigateTo="/blog"/>
              </div>

              
            </div> 
            
          </div>
      </div>
    )
}