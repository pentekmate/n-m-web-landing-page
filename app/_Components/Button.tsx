"use client"
import { useState } from "react"
import { inter } from "../_Utils/fonts"
import Link from "next/link"

type ButtonTypes="primary"|"secondary"|"navPrimary"|"cardSecondary"|"cardPrimary"|"headerPrimary"

type ButtonProps={
    type:ButtonTypes,
    text:string,
    navigate?:boolean,
    icon?:React.ReactNode,
    navigateTo?:string
}
export default function Button({type,text,navigate,icon,navigateTo}:ButtonProps){
    const [buttonIsHovered,setButtonIsHovered]=useState<boolean>(false)
    const defaultStyle = `${inter.className} rounded-[73px] relative overflow-hidden button transition-all duration-300ms  uppercase flex items-center justify-center  cursor-pointer `
    const styles = {
        primary:defaultStyle + ` bg-gradient-to-br primary-button from-customStart to-customEnd text-white w-full md:w-[200px] lg:w-[250px] h-[68px]`,
        secondary:defaultStyle + ` ${inter.className} text-black hover:shadow-xl    text-cyellow w-full  md:w-[200px] lg:w-[250px] h-[68px] font-medium border-[1px] border-cyellow  w-[250px] lg:h-[68px]`,
        navPrimary:defaultStyle + ``,
        cardSecondary:defaultStyle+ ` text-black  font-medium hover:shadow-md w-[195px] h-[36px] bg-white text-cyellow text-sm`,
        cardPrimary:defaultStyle + ` text-white primary-button font-medium hover:shadow-md   w-[195px] h-[36px] bg-gradient-to-br from-customStart to-customEnd text-cyellow text-sm`,
        headerPrimary:defaultStyle + ` bg-gradient-to-br primary-button from-customStart to-customEnd text-white w-full md:w-[200px] lg:w-[150px] h-[30px]`,
    }
    if(navigate && navigateTo){
        return(
        <Link  href={navigateTo}>
            <div onMouseEnter={()=>setButtonIsHovered(true)} className={styles[type]}>
               <div className="buttonAnimation">
               </div>
               <p className={`z-10 font-semibold  ${type==="headerPrimary"?"text-[12px]":"lg:text-[16px] sm:text-sm md:text-[10px]"}`}>{text}</p>
               {icon}
           </div>
        </Link>
        )
      
    }
    return(
        <div onMouseEnter={()=>setButtonIsHovered(true)} className={styles[type]}>
            <div className="buttonAnimation">
            </div>
            <p className={`z-10 font-semibold  ${type==="headerPrimary"?"text-[12px]":"lg:text-[16px] sm:text-sm md:text-[10px]"}`}>{text}</p>
            {icon}
        </div>
    )
}