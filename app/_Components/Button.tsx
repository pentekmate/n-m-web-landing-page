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
    onClick?:React.MouseEventHandler<HTMLDivElement>
}
export default function Button({type,text,navigate,icon,navigateTo,onClick}:ButtonProps){
    const [buttonIsHovered,setButtonIsHovered]=useState<boolean>(false)
    const defaultStyle = `${inter.className} rounded-[73px]  relative overflow-hidden button transition-all duration-300ms  uppercase flex items-center justify-center  cursor-pointer `
    const styles = {
        primary:defaultStyle + ` bg-gradient-to-br primary-button from-customStart to-customEnd text-white w-full md:w-[200px] xl:w-[250px] h-[68px]`,
        secondary:defaultStyle + ` ${inter.className} bg-white text-black hover:shadow-xl    text-cyellow w-full  md:w-[200px] xl:w-[250px] h-[68px] font-medium border-[1px] border-cyellow  w-[250px] lg:h-[68px]`,
        navPrimary:defaultStyle + ``,

        cardSecondary:defaultStyle+ ` text-black lg:text-[10px] sm:text-sm md:text-[10px]  font-medium hover:shadow-md  px-2 py-2 xl:w-[195px] xl:h-[36px] bg-white text-cyellow text-sm`,
        cardPrimary:defaultStyle + ` text-white lg:text-[10px] sm:text-[8px] md:text-[10px] primary-button font-medium hover:shadow-md  px-2 py-2 xl:w-[195px] xl:h-[36px] bg-gradient-to-br from-customStart to-customEnd text-cyellow text-sm`,

        headerPrimary:defaultStyle + ` bg-gradient-to-br primary-button from-customStart to-customEnd text-white w-full md:w-[200px] lg:w-[150px] h-[30px]`,
    }
    const defaultTextStyles="z-10 font-semibold "
    const textStyles={
        primary:defaultTextStyles+" lg:text-[16px] sm:text-sm md:text-[10px]",
        secondary:defaultTextStyles+" lg:text-[16px] sm:text-sm md:text-[10px]",
        
        navPrimary:defaultTextStyles + ``,

        cardSecondary:defaultTextStyles+ ` text-[11px]`,
        cardPrimary:defaultTextStyles + ` text-[11px]`,

        headerPrimary: defaultTextStyles + " text-[12px]"

    }
    if(navigate && navigateTo){
        return(
        <Link  href={navigateTo}>
            <div onClick={onClick} onMouseEnter={()=>setButtonIsHovered(true)} className={styles[type]}>
               <div className="buttonAnimation">
               </div>
               <p className={textStyles[type]}>{text}</p>
               {icon}
           </div>
        </Link>
        )
      
    }
    return(
        <div onClick={onClick} onMouseEnter={()=>setButtonIsHovered(true)} className={styles[type]}>
            <div className="buttonAnimation">
            </div>
            <p className={textStyles[type]}>{text}</p>
            {icon}
        </div>
    )
}