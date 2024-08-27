"use client"
import { lato, poppins } from "../_Utils/fonts";
import { gyakDataObject } from "../gyik/page";
import gyikCollapsetrue from "../_Assets/gyikCollapsetrue.png"
import Image from "next/image";
import { useRef, useState } from "react";

export default function GyikCollapseItem({title,content}:gyakDataObject){
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const toggleButtonRef = useRef<HTMLDivElement>(null);

    function toggleOpen(){
        setIsOpen(!isOpen)
        if(toggleButtonRef.current){
            toggleButtonRef.current.style.transform=isOpen? "rotate(360deg)":"rotate(180deg)"
        }
    }   
    function formatContentAsParagraphs(content:string) {


        return content.split('\n').map((line, index) => (
        <>
              <p key={index} className="text-[22px] text-fgrey" dangerouslySetInnerHTML={{ __html: line }}></p>
            <br />
        </>
        ));
    }
    return(
        <div className={`shadow-xl border-[1px] py-[17px] px-[15px] border-[#ECECEC] transition-all duration-300 w-full flex flex-col gap-8 rounded-xl ${!isOpen?" max-h-[78px]" : "max-h-[800px]"}`}>
            <div className="flex items-center justify-between text-[26px]  w-full">
                <p className={`${poppins.className} font-medium `}>{title}</p>
                <div  ref={toggleButtonRef} onClick={()=>toggleOpen()}  className="w-[28px] transition-all duration-300 h-[28px] cursor-pointer">
                    <Image alt="collapse" src={gyikCollapsetrue}></Image>
                </div>
               
            </div>
            {isOpen && 
                <p className={`${lato.className} text-[22px] text-fgrey`}>{formatContentAsParagraphs(content)}</p>
                }
        </div>
    )
}