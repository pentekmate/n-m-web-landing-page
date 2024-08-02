import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";
import logo from "./_Assets/logo-no-background.png";
import downArrow from "./_Assets/down-arrow.png";
import creator from "./_Assets/Website Creator-rafiki.png";
import charts from "./_Assets/Charts-pana.png";
import arrow from "./_Assets/arrow.png";
import team from "./_Assets/Team goals-rafiki.png";
import User from "./_Assets/User research-bro.png";

import gyorsasag from "./_Assets/gyorsasag.png";
import alacsony_ar from "./_Assets/alacsony_ar.png";
import megbizhatosag from "./_Assets/megbizhatosag.png";
import pontossag from "./_Assets/pontossag.png";

import pipa from "./_Assets/pipa.png";
import iksz from "./_Assets/iksz.png";
import plus from "./_Assets/plus.png";

import email from "./_Assets/email.png";
import telo from "./_Assets/mobile.png";
import facebook from "./_Assets/facebook.png";

export default function Home() {
  return (
    <>
      {/* a headert szedd kulon komponensre majd */}
      {/* <div className="w-full flex flex-wrap items-center">
        <Image src={logo} alt="logo" width={75} height={75} className="m-3" />
        <div className="ml-auto mr-2 flex">
          <div className="space-x-3">
            <span className={`${lato.className}`}>Csomagok</span>
            <span className={`${lato.className}`}>Kapcsolat</span>
            <span className={`${lato.className}`}>Referencia</span>
          </div>
          <div className="ml-28 mr-9">
            <span
              className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white`}
            >
              Ajánlatot kérek
            </span>
          </div>
        </div>
      </div> */}

      <div className="w-full flex flex-col md:flex-row md:h-[450px]">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold m-3">
              Egyedi webfejlesztés
            </h3>
            <p className="text-base md:text-lg m-3 leading-5">
              Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek.
              Megoldásainkat azok az üzemeltetők választják, akiknek fontos az
              egyedi megjelenés és a működés hosszú távon.
            </p>
            <span className="inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-4 mt-3 uppercase text-xs md:text-sm text-cyellow font-bold">
              Tudj meg többet{" "}
              <Image
                src={downArrow}
                alt="logo"
                width={15}
                height={15}
                className="ml-2 md:ml-3"
              />
            </span>
            <span
              className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white px-3 py-2 md:px-4 md:py-3 mx-4 mt-3 uppercase text-xs md:text-sm font-bold`}
            >
              Árajánlatot kérek
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex p-4">
          <Image
            src={creator}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:h-[450px] md:mt-0">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="rounded-full bg-gradient-to-br from-customStart to-customEnd w-2/3">
            <Image
              src={charts}
              alt="logo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div>
            <div className="flex">
              <h3 className="text-2xl md:text-3xl font-bold m-3">
                Miért van szüksége egy vállalkozásnak weboldalra?
              </h3>
              <Image
                src={arrow}
                alt="logo"
                className="-rotate-12 translate-y-5"
              />
            </div>
            <p className="text-base md:text-lg m-3 leading-5">
              Egy vállalkozásnak weboldalra van szüksége, mert ez biztosítja az
              online jelenlétet és növeli a hitelességet. Lehetővé teszi a
              termékek és szolgáltatások bemutatását, valamint az ügyfelekkel
              való kapcsolattartást. Emellett a jól optimalizált weboldal segít
              az új ügyfelek megszerzésében és az üzleti növekedésben.
            </p>
            <span className="inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-3 mt-3 uppercase text-xs md:text-sm text-cyellow font-bold">
              Tovább a blogra
            </span>
          </div>
        </div>
      </div>

      <div className="text-center items-center mt-[35px] p-4">
        <h3 className="text-2xl md:text-3xl font-bold m-3">
          Miért válassz minket?
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={pontossag} alt="pontossag" width={65} className="m-3" />
            <span className="font-bold">Pontosság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={gyorsasag} alt="gyorsasag" width={65} className="m-3" />
            <span className="font-bold">Gyorsaság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={alacsony_ar}
              alt="alacsony_ar"
              width={65}
              className="m-3"
            />
            <span className="font-bold">Alacsony ár</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={megbizhatosag}
              alt="megbizhatosag"
              width={65}
              className="m-3"
            />
            <span className="font-bold">Megbízhatóság</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:h-[450px] bg-cyellow bg-opacity-10 p-10">
        <div className="w-full md:w-1/2 flex p-4 flex-wrap">
          <div>
            <h6 className="text-cyellow uppercase ml-3">Egyedi ajánlat!</h6>
            <h3 className="text-2xl md:text-3xl font-bold m-3">
              Webfejlesztés szinte ingyen!
            </h3>
            <p className="text-base md:text-lg ml-3 leading-5">
              Az N&M Web elindulása alkalmából teljesen ingyenes fejlesztési
              költségi akciót hírdetünk. Célünk, hogy{" "}
              <span className="text-cyellow">együtt növekedjünk.</span> Így az
              első 3 ügyfélnek , fejlesztési költségektől mentesen készítünk
              weboldalt.
            </p>
            <p className="text-cyellow font-bold ml-3 text-xl">
              Ne hagyd ki ezt az egyedi ajánlatot, és kérj ajánlatot még ma!
            </p>
          </div>
          <div className="ml-3 mt-3">
            <span
              className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white px-3 py-2 md:px-4 md:py-3 mt-3 uppercase text-xs md:text-sm font-bold`}
            >
              Ajánlatot kérek
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex p-2">
          <Image
            src={team}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="text-center items-center mt-[35px] p-4">
        <h3 className="text-2xl md:text-3xl font-bold m-3 uppercase">
          Lássuk milyen csomagok közül válogathatsz
        </h3>
        <p>Hogy megtaláld számodra a legjobbat.</p>

        <div className="flex flex-wrap justify-center items-center">
          <div className="items-center justify-center flex flex-col m-4 border rounded-2xl p-3 h-[500px] w-[270px]">
            <h4>Statikus weboldal</h4>
            <p>Egyszerű weboldal, statikus tartalommal</p>
            <div className="border rounded-2xl bg-cyellow bg-opacity-20 w-3/4 mx-2 my-4 p-3 h-[329px] w-[245px] flex flex-col justify-between">
              <ul className="my-4 text-left flex-grow space-y-4">
                <li className="flex items-center justify-start">
                  <Image src={iksz} alt="logo" className="mr-2" />
                  Admin oldal
                </li>
                <li className="flex items-center justify-start">
                  <Image src={iksz} alt="logo" className="mr-2" />
                  Oldal szerkeszthetőség
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Gyors fejlesztési idő
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Tech support
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Egyedi design
                </li>
              </ul>
              <span className="uppercase bg-white text-cyellow font-bold rounded-full p-2 m-4">
                Érdeklődöm
              </span>
            </div>
          </div>

          <div className="items-center justify-center flex flex-col m-4 border rounded-2xl p-3 h-[539px] w-[270px] bg-gradient-to-br from-customStart to-customEnd">
            <h4>Normál Weboldal</h4>
            <p>Normál weboldal, vállalkozásoknak.</p>
            <div className="border rounded-2xl w-3/4 bg-white mx-2 my-4 p-3 h-[355px] w-[245px] flex flex-col justify-between">
              <ul className="my-4 text-left flex-grow space-y-4">
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Admin oldal
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Oldal szerkeszthetőség
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Gyors fejlesztési idő
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Tech support
                </li>
                <li className="flex items-center justify-start">
                  <Image src={pipa} alt="logo" className="mr-2" />
                  Egyedi design
                </li>
              </ul>
              <span className="uppercase bg-white text-cyellow font-bold rounded-full p-2 m-4">
                Érdeklődöm
              </span>
            </div>
          </div>

          <div className="items-center justify-center flex flex-col m-4 border rounded-2xl p-3 h-[500px] w-[270px]">
            <h4>Egyedi ötlet</h4>
            <p>Ha egyedi ötleted van, abban is segítünk</p>
            <div className="border rounded-2xl bg-cyellow bg-opacity-20 w-3/4 mx-2 my-4 p-3 h-[329px] w-[245px] flex flex-col justify-between">
              <p className="text-center flex items-center justify-center flex-grow">
                Lehetőségek kapcsán kérlek érdeklődj!
              </p>
              <span className="uppercase bg-white text-cyellow font-bold rounded-full p-2 m-4">
                Érdeklődöm
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:h-[450px] md:mt-0">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full md:w-1/2 flex p-4">
            <Image
              src={User}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold m-3">
              Rólunk egy pár szó
            </h3>
            <p className="text-base md:text-lg m-3 leading-5">
              Csapatunk 2024ben alakult, jelenleg 2főt számlál. Mögöttünk több
              év fejlesztésben szerzett tapasztalat. Csapatunk tagjai dolgoztak
              már egészségügyi szoftvereken,időpont foglaló rendszereken,
              különböző weboldalakon. Imádjuk a kihívásokat, és a különböző
              érdekesebbnél érdekesebb projekteket. Ha kérdésed van nyugodtan
              keress minket
            </p>
            <span className="inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-3 mt-3 uppercase text-xs md:text-sm text-cyellow font-bold">
              Kérdésem Van
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-cyellow p-10 flex justify-center items-center flex-col">
        <h3 className="text-2xl md:text-3xl font-bold m-3 text-white text-center">
          Referenciák
        </h3>
        <p className="text-center w-1/2 m-3">
          Frissen indult vállalkozásként, a munka tapasztalatunkok kívül sokat
          nem tudunk mutatni. Ezeket <span className="font-bold">itt</span>{" "}
          megtekintheted. Legyen a{" "}
          <span className="text-white font-bold">Tied</span> a megtiszteltetés,
          hogy elsők között választod a Mi szolgáltatásainkat.{" "}
        </p>

        <div className="border border-white flex flex-col w-[277px] h-[277px] items-center justify-center rounded-2xl border-dashed border-8 mt-4">
          <Image src={plus} alt="logo" className="mb-4" />
          <p className="text-center text-white mt-4">A te vállalkozásod</p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 m-8">
        <h3 className="text-3xl font-bold text-center">
          Megtetted első lépésed,
        </h3>
        <p className="text-center">
          A Siker felé, vedd fel velünk a kapcsolatot!
        </p>
        <div className="bg-cyellow bg-opacity-20 rounded-xl w-2/4 flex flex-col items-center justify-center p-8 space-y-6">
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
          <div className="w- flex items-center space-x-2">
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

      <div className="w-full bg-fgrey flex flex-wrap p-8 text-white">
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={75}
              height={75}
              className="m-3"
            />
            <h1 className="text-white font-bold text-xl ml-2">N&M Web</h1>
          </div>
          <p className="text-white">
            Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek.
            Megoldásainkat azok az üzemeltetők választják, akiknek fontos az
            egyedi megjelenés és a működés hosszú távon.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl">Navigáció</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            <li className="hover:text-gray-400 cursor-pointer">Kapcsolat</li>
            <li className="hover:text-gray-400 cursor-pointer">Rólunk</li>
            <li className="hover:text-gray-400 cursor-pointer">Csomagok</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl">Kapcsolat</h3>
          <div className="flex items-center space-x-2">
            <Image src={email} alt="email logo" className="w-6 h-6" />
            <p>email@email.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={telo} alt="phone logo" className="w-6 h-6" />
            <p>+36704228587</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={facebook} alt="facebook logo" className="w-6 h-6" />
            <p>facebook</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
          <h3 className="text-white font-bold text-xl">Egyéb linkek</h3>
          <p className="hover:text-gray-400 cursor-pointer">FAQ</p>
        </div>
        <div className="w-full h-[25px] bg-fgrey text-white pl-4 text-xs flex items-center justify-center">
          COPYRIGHT @ 2024 Minden jog fenttartva
        </div>
      </div>

      {/* <p className={`${lato.className}`}>Text proba1</p>
      <p className={`${poppins.className}`}>Text proba1</p>
      <p className={`${inter.className} bg-red-900`}>Text proba1</p> */}
    </>
  );
}
