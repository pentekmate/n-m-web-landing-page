import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";
import logo from "./_Assets/logo-no-background.png";
import downArrow from "./_Assets/down-arrow.png";
import creator from "./_Assets/Website Creator-rafiki.png";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-wrap items-center">
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
      </div>

      <div className="w-full flex flex-col md:flex-row h-[450px] border">
  <div className="w-full md:w-1/2 flex items-center justify-center p-4">
    <div>
      <h3 className="text-2xl md:text-3xl font-bold m-3">Egyedi webfejlesztés</h3>
      <p className="text-base md:text-lg m-3 leading-5">
        Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek.
        Megoldásainkat azok az üzemeltetők választják, akiknek fontos az
        egyedi megjelenés és a működés hosszú távon.
      </p>
      <span className="inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-4 mt-3 uppercase text-xs md:text-sm text-cyellow">
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
        className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white px-3 py-2 md:px-4 md:py-3 mx-4 mt-3 uppercase text-xs md:text-sm`}
      >
        Ajánlatot kérek
      </span>
    </div>
  </div>
  <div className="w-full md:w-1/2 flex items-center justify-center p-4">
    <Image
      src={creator}
      alt="logo"
      className="object-cover w-full h-auto md:h-full"
    />
  </div>
</div>


      {/* <p className={`${lato.className}`}>Text proba1</p>
      <p className={`${poppins.className}`}>Text proba1</p>
      <p className={`${inter.className} bg-red-900`}>Text proba1</p> */}
    </>
  );
}
