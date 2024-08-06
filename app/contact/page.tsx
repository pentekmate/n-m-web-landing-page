import Footer from "../_Components/Footer";
import Header from "../_Components/Navigation";
import { inter, lato, poppins } from "../_Utils/fonts";

import Image from "next/image";
import Link from "next/link";

import creator from "../_Assets/contact us-bro.png";
import email from "../_Assets/email.png";
import telo from "../_Assets/mobile.png";
import facebook from "../_Assets/facebook.png";

export default function Contact() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center space-y-4 m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10">
        <h3 className="text-3xl font-bold text-center">
          Tedd meg első lépésed a siker felé!
        </h3>
        <p className="text-center">
          Csupán add meg adataidat, hogy felvehessük veled a kapcsolatot!
        </p>
        <div className="bg-cyellow bg-opacity-20 rounded-xl w-full sm:w-3/4 md:w-2/4 lg:w-1/3 flex flex-col items-center justify-center p-8 space-y-6">
          <input
            type="text"
            placeholder="Név"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <input
            type="email"
            placeholder="E-mail cím"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <input
            type="tel"
            placeholder="Telefonszám"
            className="w-full p-4 placeholder-gray-500 rounded-full"
          />
          <div className="relative w-full">
            <select className="w-full p-4 placeholder-gray-500 rounded-full bg-white border border-gray-300">
              <option value="" disabled selected>
                Melyik csomagunk érdekli?
              </option>
              <option value="statikus-weboldal">Statikus weboldal</option>
              <option value="normal-weboldal">Normál weboldal</option>
              <option value="egyedi-otlet">Egyedi ötlet</option>
              <option value="meg-nem-dontottem">Még nem döntöttem</option>
            </select>
          </div>
          <div className="w-full flex items-center space-x-2">
            <input type="checkbox" />
            <label className="italic">
              Hozzájárulok a megadott adataim kapcsolatfelvétel céljából történő
              kezeléséhez.
            </label>
          </div>
          <button className="bg-cyellow w-2/4 p-2 text-white rounded-full">
            Küldés
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row bg-cyellow bg-opacity-20">
        <div className="w-full md:w-1/2 flex">
          <Image
            src={creator}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col border-l-2 border-l-cyellow pl-3">
          <div className="p-4 flex flex-col">
            <h3 className="font-bold text-xl">N&M Web Kapcsolat</h3>
            <div className="flex items-center mt-2 mb-2">
              <Image src={email} alt="email logo" className="w-6 h-6 mr-2" />
              <p>email@email.com</p>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <Image src={telo} alt="phone logo" className="w-6 h-6 mr-2" />
              <p>+36704228587</p>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <Image
                src={facebook}
                alt="facebook logo"
                className="w-6 h-6 mr-2"
              />
              <p>facebook</p>
            </div>
          </div>
          <div className="mb-3 p-2">
            <h3 className="font-bold text-xl ml-3 mb-2">Hagyj nekünk üzenetet!</h3>
            <input
              type="text"
              placeholder="Név"
              className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
            />
            <input
              type="email"
              placeholder="E-mail cím"
              className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
            />
            <input
              type="tel"
              placeholder="Telefonszám"
              className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
            />
            <div className="w-full flex items-center space-x-2">
              <input type="checkbox" />
              <label className="italic">
                Hozzájárulok a megadott adataim kapcsolatfelvétel céljából
                történő kezeléséhez.
              </label>
            </div>
            <button className="bg-cyellow w-2/4 p-2 text-white rounded-full">
              Küldés
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
