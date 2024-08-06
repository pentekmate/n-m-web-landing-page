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
    items:PackageCardContentObject[]
}

export default function PackageCard({...props}:PackageCardProps){
    return(
        <div className={`${props.title ==="Normál Weboldal" ? " bg-gradient-to-br from-customStart to-customEnd text-white" :"bg-white text-black" } transition-all duration-300  hover:-mt-1  items-center justify-center  flex flex-col m-4 shadow-2xl rounded-[18px] p-3 h-[500px] w-[270px]`}>
        <h4 className={` font-semibold ${inter.className} text-[21px]`}>{props.title}</h4>
        <p className={`${lato.className} ${props.title ==="Normál Weboldal" ? "text-textGray":""} text-[18px]`}>{props.desription}</p>
        <div className={`${props.title ==="Normál Weboldal" ? "bg-white":"bg-cyellow bg-opacity-20"} border rounded-2xl    mx-2 my-4 p-3 h-[329px] w-[245px] flex flex-col items-center  justify-between`}>
          <ul className="my-4 text-left flex-grow space-y-4 flex flex-col justify-center">
           {props.items.map((item:PackageCardContentObject,index)=>
            <li key={index} className="flex items-center gap-2 justify-start">
                { item.avaliable !== null &&
                <Image src={item.avaliable? pipa :iksz} alt="logo" className="mr-2" />}
                <p className={`${lato.className} text-black`}>{item.value}</p>
            </li>
            
            )}  
          
          </ul>
            <Button text="érdeklődöm" type={props.title==="Normál Weboldal"? "cardPrimary" : "cardSecondary"}></Button>
        </div>
      </div>
    )
}


{/* <li className="flex items-center justify-start">
              
            </li> */}