import pipa from "../_Assets/pipa.png";
import iksz from "../_Assets/iksz.png";
import Image from "next/image";
import { title } from "process";
import { inter, lato } from "../_Utils/fonts";
import Button from "./Button";
type PackageCardTitles = "Statikus Weboldal" | "Normál Weboldal" | "Egyedi Ötlet"
export type PackageCardContentObject={
    value:string,
    avaliable?:boolean | null
}
type PackageCardProps={
    title:PackageCardTitles,
    desription:string,
    items:PackageCardContentObject[],
    onClick:React.MouseEventHandler<HTMLDivElement>
    
}

export default function PackageCard({...props}:PackageCardProps){
  
    return(
        <div className={`${props.title ==="Normál Weboldal" ? " bg-gradient-to-br from-customStart to-customEnd text-white" :"bg-white text-black" } transition-all duration-300  hover:-mt-1  items-center justify-center  flex flex-col m-4 shadow-2xl rounded-[18px] p-3 h-[400px] w-[250px] lg:h-[400px] lg:w-[220px] xl:h-[500px] xl:w-[270px]`}>
          <h4 className={` font-semibold ${inter.className} xl:text-[21px] lg:font-[18px]`}>{props.title}</h4>
          <p className={`${lato.className} ${props.title ==="Normál Weboldal" ? "text-textGray":""} xl:text-[18px] lg:text-[14px]`}>{props.desription}</p>
          <div className={`${props.title ==="Normál Weboldal" ? "bg-white":"bg-cyellow bg-opacity-20"} border rounded-2xl mx-2 py-3  h-[329px] w-full flex flex-col items-center  justify-between`}>
            <ul className="my-4 text-left flex-grow space-y-4 flex flex-col justify-center">
            {props.items.map((item:PackageCardContentObject,index)=>
              <li key={index} className="flex items-center gap-2 justify-start">
                  { item.avaliable !== null &&
                  <Image src={item.avaliable? pipa :iksz} alt="logo" className="mr-2" />}
                  <p className={`${lato.className} text-black lg:text-[15px] xl:text-[18px]`}>{item.value}</p>
              </li>
              
              )}  
            
            </ul>
              <Button onClick={props.onClick} text="ezt a csomagot választom" type={props.title==="Normál Weboldal"? "cardPrimary" : "cardSecondary"}></Button>
          </div>
      </div>
    )
}
