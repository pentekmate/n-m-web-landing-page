"use client";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import logo from "../_Assets/logo-no-background.png";
import logoWHite from "../_Assets/logo-color.png";

import email from "../_Assets/email-black.png";
import telo from "../_Assets/mobile-black.png";
import facebook from "../_Assets/facebook-black.png";

import Open from "../_Assets/open.png";


import { lato, poppins } from "../_Utils/fonts";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../_Assets/logo-white-no-bg.png"
import Button from "./Button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling,setScrolling]=useState<boolean>(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    if (window.scrollY > 300) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  },[])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky z-[100] h-[60px] top-0 md:px-[90px] w-full flex  ${scrolling? "navigatorBg" : "navigatorNoBg"}`}>
      <div className="flex items-center justify-between w-full">
          <Link href="/">
            <Image src={scrolling? whiteLogo:logo} alt="logo" width={scrolling?110:75} height={scrolling?100:75} className={`${scrolling?"":"m-3"}`} />
          </Link>
          <div className="flex  items-center">
              <div className="hidden  sm:flex space-x-3">
                <Link  className="hover:font-bold transition-all min-w-[100px] nav-item " href="/#tier" scroll={true}>
                    <div data-to-scrollspy-id="tier" className="box" >
                        Csomagok
                    </div>
                </Link>
                <Link className="hover:font-bold transition-all min-w-[100px] nav-item " href="/contact">Kapcsolat</Link>
                <Link  className="hover:font-bold transition-all min-w-[100px] nav-item " href="/#reference"  scroll={true}>
                    <div  data-to-scrollspy-id="reference"  className="box" >
                      Referencia
                    </div>
                </Link>
                <Link className="hover:font-bold transition-all min-w-[100px] nav-item " href="/blog">Blog</Link>
              </div>
              <Button text="ajánlatot kérek" 
              navigate
              navigateTo="/contact" 
              type="headerPrimary"></Button>
          </div>
      </div>
      <div className="sm:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                  {isOpen ? null : (
                    <Image src={Open} alt="logo" width={35} className="m-3" />
                  )}
                </button>
              </div>
      {isOpen && (
        <div className="absolute w-screen h-screen  opacity-100 bg-gradient-to-br primary-button from-customStart to-customEnd bg-cyellow flex flex-col z-50 p-4">
          <div className="relative w-full h-full">
              <Image
                src={logoWHite}
                alt="logo"
                width={75}
                height={75}
                className="mb-6"
              />
              <MdOutlineClose className="absolute top-0 end-0" size={40}  fill="white" onClick={toggleMenu} />
              <div className="flex flex-col gap-4">
                <h3 className={`text-[28px] font-bold text-[#393F44]  ${poppins.className} font-semibold`}>Navigáció</h3>
                <ul className="list-disc list-inside">
                  <li className={`mobile-nav-item  ${poppins.className} `}>
                    <Link onClick={()=>toggleMenu()} href="/">Főoldal</Link>
                  </li>
                  <li className={`mobile-nav-item  ${poppins.className} `}>
                    <Link onClick={()=>toggleMenu()}  href="/#tier">Csomagok</Link>
                  </li>
                  <li  className={`mobile-nav-item  ${poppins.className} `}>
                    <Link onClick={()=>toggleMenu()}  href="/contact">Kapcsolat</Link>
                  </li>
                  <li  className={`mobile-nav-item  ${poppins.className} `}>
                    <Link onClick={()=>toggleMenu()}  href="/#reference">Referencia</Link>
                  </li>
                  <li  className={`mobile-nav-item  ${poppins.className} `}>
                    <Link onClick={()=>toggleMenu()}  href="/blog">Blog</Link>
                  </li>
                </ul>
                <Button navigate navigateTo="/contact" type="secondary" text="Ajánlatot kérek"></Button>
                <div className="flex flex-col gap-4">
                  <h3 className={`text-[28px] font-semibold text-[#393F44] ${poppins.className}`}>Kapcsolat</h3>
                  
                  <div className="flex items-center gap-4 ">
                    <Image src={email} alt="email logo"  />
                    <p  className={`text-[24px] font-bold text-[#393F44]  ${poppins.className} font-semibold `}>email@email.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image src={telo} alt="phone logo"  />
                    <p className={`text-[24px] font-bold text-[#393F44]  ${poppins.className} font-semibold `}>+36704228587</p>
                  </div>
                  <div className="flex items-center  gap-4">
                    <Image src={facebook} alt="facebook logo" />
                    <p className={`text-[24px] font-bold text-[#393F44]  ${poppins.className} font-semibold `}>facebook</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}
