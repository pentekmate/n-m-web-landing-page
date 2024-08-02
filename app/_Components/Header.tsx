"use client";

import { useState } from "react";
import logo from "../_Assets/logo-no-background.png";
import logoWHite from "../_Assets/logo-color.png";

import email from "../_Assets/email-black.png";
import telo from "../_Assets/mobile-black.png";
import facebook from "../_Assets/facebook-black.png";

import Open from "../_Assets/open.png";
import Close from "../_Assets/close.png";

import { lato } from "../_Utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { Linden_Hill } from "next/font/google";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full flex flex-wrap items-center p-3">
      <Link href="/">
        <Image src={logo} alt="logo" width={75} height={75} className="m-3" />
      </Link>
      <div className="ml-auto flex items-center">
        <div className="hidden sm:flex space-x-3">
          <Link href="/">Csomagok</Link>
          <Link href="/contact">Kapcsolat</Link>
          <Link href="/">Referencia</Link>
        </div>
        <div className="hidden sm:block ml-28 mr-9">
          <Link
            href="/contact"
            className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white`}
          >
            Ajánlatot kérek
          </Link>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? null : (
              <Image src={Open} alt="logo" width={35} className="m-3" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-cyellow bg-opacity-90 flex flex-col z-50 p-4">
          <Image
            src={logoWHite}
            alt="logo"
            width={75}
            height={75}
            className="mb-6"
          />
          <Image
            onClick={toggleMenu}
            src={Close}
            alt="logo"
            width={35}
            className="absolute top-4 right-4 text-white text-3xl"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Navigáció</h3>
            <ul className="list-disc list-inside mb-6">
              <li className="text-xl font-bold mb-2">
                <Link href="/">Főoldal</Link>
              </li>
              <li className="text-xl font-bold mb-2">
                <Link href="/">Csomagok</Link>
              </li>
              <li className="text-xl font-bold mb-2">
                <Link href="/contact">Kapcsolat</Link>
              </li>
              <li className="text-xl font-bold mb-2">
                <Link href="/">Referencia</Link>
              </li>
            </ul>
            <div className="text-white text-center items-center border-white inline-flex border rounded-full px-4 py-2 w-3/4 uppercase text-sm font-bold flex  justify-center w-full border cursor-pointer">
              <Link href="/contact">Ajánlatot kérek</Link>
            </div>
            <div className="flex flex-col mt-6 space-y-4">
              <h3 className="text-2xl font-bold mb-4">Kapcsolat</h3>
              <div className="flex items-center space-x-2">
                <Image src={email} alt="email logo" className="w-6 h-6" />
                <p className="text-lg font-semibold">email@email.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={telo} alt="phone logo" className="w-6 h-6" />
                <p className="text-lg font-semibold">+36704228587</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={facebook} alt="facebook logo" className="w-6 h-6" />
                <p className="text-lg font-semibold">facebook</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
