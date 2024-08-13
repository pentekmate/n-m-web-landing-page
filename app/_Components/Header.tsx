
import Image from "next/image";
import Button from "./Button";
import downArrow from "../_Assets/down-arrow.png";
import creator from "../_Assets/Website Creator-rafiki.png";
import { lato, poppins } from "../_Utils/fonts";

export default function Header(){
  
    return(
        <div   className="w-full flex flex-col  md:flex-row h-fit mt-4 md:px-[90px]">
                <div data-aos="fade-up" className="w-full md:w-1/2 flex   items-center justify-center md:items-start flex-col gap-5 md:gap-6 xl:gap-20">
                
                        <div className="flex  items-center md:items-start flex-col  lg:gap-2 xl:gap-8">
                            <h1 className={`h1  ${poppins.className}`}>
                                Egyedi webfejlesztés
                            </h1>
                            <p className={`p1 hidden sm:block ${lato.className}`}>
                                Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek. <br />
                                Megoldásainkat azok az üzemeltetők választják, akiknek <br /> fontos az
                                egyedi megjelenés és a működés hosszú távon.
                            </p>
                            <p className={`p1 block sm:hidden ${lato.className} px-[60px]`}>
                                Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek.. 
                            
                            </p>

                        </div>

                        <div className="flex flex-col p-4  md:px-0 w-full md:flex-row md:justify-start justify-center gap-4">
                        <Button 
                        text="tudj meg többet" 
                        type="secondary" icon={
                            <Image
                            src={downArrow}
                            alt="logo"
                            width={15}
                            height={15}
                            className="ml-2 md:ml-3"
                        />}
                        navigate
                        navigateTo="/#importantWebsite"
                        />
                        <Button 
                        text="ajánlatot kérek" 
                        type="primary"
                        navigate
                        navigateTo="/contact"/>
                        </div>

             
                </div>
            <div data-aos="fade-down-right" className="w-full md:w-1/2 flex items-center justify-center">
                <div className="w-2/3">
                    <Image
                        src={creator}
                        alt="logo"
                        className="object-cover w-full h-full"
                    />
                </div>
          </div>
      </div>
    )
}