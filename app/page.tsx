import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";
import logo from "./_Assets/logo-no-background.png";
import downArrow from "./_Assets/down-arrow.png";
import creator from "./_Assets/Website Creator-rafiki.png";
import charts from "./_Assets/Charts-pana.png";
import arrow from "./_Assets/arrow.png";

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

      <div className="w-full flex flex-col md:flex-row md:h-[450px] md:mt-0 border">
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

      <div className="text-center items-center mt-[35px]">
        <h3 className="text-2xl md:text-3xl font-bold m-3">
          Miért válassz minket?
        </h3>
        <p>Mert</p>
      </div>

      {/* <p className={`${lato.className}`}>Text proba1</p>
      <p className={`${poppins.className}`}>Text proba1</p>
      <p className={`${inter.className} bg-red-900`}>Text proba1</p> */}
    </>
  );
}
