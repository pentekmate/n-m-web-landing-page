import gyorsasag from "../_Assets/gyorsasag.png";
import alacsony_ar from "../_Assets/alacsony_ar.png";
import megbizhatosag from "../_Assets/megbizhatosag.png";
import pontossag from "../_Assets/pontossag.png";
import { lato, poppins } from "../_Utils/fonts";
import Image from "next/image";

export default function WhyChooseUs(){
    return(
        <div  className="text-center w-full flex flex-col gap-1 items-center md:px-[90px] xl:my-24 my-12">
          <h3  className={`${poppins.className} h2 `}>
            Miért válassz minket?
          </h3>

          <div data-aos="fade-up" className="flex flex-wrap  w-full md:justify-evenly gap-y-6">

            <div   className="items-center w-1/2 gap-4   justify-center flex flex-col  ">
              <Image src={pontossag} alt="pontossag" width={65} className="" />
              <span className={`${lato.className} WhyChooseUsSpan`}>Pontosság</span>
            </div>

            <div  className="items-center gap-4  w-1/2  justify-center flex flex-col  ">
              <Image src={gyorsasag} alt="gyorsasag" width={65} className="" />
              <span className={`${lato.className} WhyChooseUsSpan`}>Gyorsaság</span>
            </div>

            <div  className="items-center gap-4  w-1/2  justify-center flex flex-col ">
              <Image
                src={alacsony_ar}
                alt="alacsony_ar"
                width={65}
                className=""
              />
              <span className={`${lato.className} WhyChooseUsSpan`}>Alacsony ár</span>
            </div>

            <div  className="items-center gap-4  w-1/2  justify-center flex flex-col ">
              <Image
                src={megbizhatosag}
                alt="megbizhatosag"
                width={65}
                className=""
              />
              <span className={`${lato.className} WhyChooseUsSpan`}>Megbízhatóság</span>
            </div>

          </div>
      </div>
    )
}