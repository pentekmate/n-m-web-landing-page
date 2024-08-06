import gyorsasag from "../_Assets/gyorsasag.png";
import alacsony_ar from "../_Assets/alacsony_ar.png";
import megbizhatosag from "../_Assets/megbizhatosag.png";
import pontossag from "../_Assets/pontossag.png";
import { lato, poppins } from "../_Utils/fonts";
import Image from "next/image";

export default function WhyChooseUs(){
    return(
        <div data-aos="fade-left" className="text-center flex flex-col gap-[47px] items-center  mt-24 mb-24">
        <h3  className={`${poppins.className} text-2xl lg:leading-[72px]  text-[2rem] md:text-[32px] lg:text-h2 font-bold  `}>
          Miért válassz minket?
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={pontossag} alt="pontossag" width={65} className="m-3" />
            <span className={`${lato.className} lg:text-[37px] font-bold`}>Pontosság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={gyorsasag} alt="gyorsasag" width={65} className="m-3" />
            <span className={`${lato.className} lg:text-[37px] font-bold`}>Gyorsaság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={alacsony_ar}
              alt="alacsony_ar"
              width={65}
              className="m-3"
            />
            <span className={`${lato.className} lg:text-[37px] font-bold`}>Alacsony ár</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={megbizhatosag}
              alt="megbizhatosag"
              width={65}
              className="m-3"
            />
            <span className={`${lato.className} font-bold lg:text-[37px]`}>Megbízhatóság</span>
          </div>
        </div>
      </div>
    )
}