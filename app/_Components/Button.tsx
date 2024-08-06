"use client"
import { useState } from "react"
import { inter } from "../_Utils/fonts"

type ButtonTypes="primary"|"secondary"|"navPrimary"|"cardSecondary"|"cardPrimary"

type ButtonProps={
    type:ButtonTypes,
    text:string,
    onClick?:()=>void,
    icon?:React.ReactNode
}
export default function Button({type,text,onClick,icon}:ButtonProps){
    const [buttonIsHovered,setButtonIsHovered]=useState<boolean>(false)
    const defaultStyle = `${inter.className} rounded-[73px] relative overflow-hidden button transition-all duration-300ms  uppercase flex items-center justify-center  cursor-pointer `
    const styles = {
        primary:defaultStyle + ` bg-gradient-to-br primary-button from-customStart to-customEnd text-white w-full md:w-[200px] lg:w-[250px] h-[68px]`,
        secondary:defaultStyle + ` ${inter.className} text-black hover:shadow-xl    text-cyellow w-full  md:w-[200px] lg:w-[250px] h-[68px] font-medium border-[1px] border-cyellow  w-[250px] lg:h-[68px]`,
        navPrimary:defaultStyle + ``,
        cardSecondary:defaultStyle+ ` text-black  font-medium hover:shadow-md w-[195px] h-[36px] bg-white text-cyellow text-sm`,
        cardPrimary:defaultStyle + ` text-white primary-button font-medium hover:shadow-md   w-[195px] h-[36px] bg-gradient-to-br from-customStart to-customEnd text-cyellow text-sm`
    }
    return(
        <div onMouseEnter={()=>setButtonIsHovered(true)} className={styles[type]}>
            <div className="buttonAnimation">
            </div>
            <p className="z-10 font-semibold lg:text-[16px] sm:text-sm md:text-[10px]">{text}</p>
            {icon}
        </div>
    )
}