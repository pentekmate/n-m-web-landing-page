import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";




import User from "./_Assets/User research-bro.png";





import ToggleDiv from "./_Components/ToggleDiv";
import Footer from "./_Components/Footer";
import PackageCard from "./_Components/PackageCard";
import Button from "./_Components/Button";
import Navigation from "./_Components/Navigation";
import Header from "./_Components/Header";
import ImporantWebsite from "./_Components/ImportantWebsite";
import WhyChooseUs from "./_Components/WhyChooseUs";
import SpecialOffer from "./_Components/SpecialOffer";
import PackageOffers from "./_Components/PackageOffers";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Header></Header>
      <ImporantWebsite></ImporantWebsite>
      <WhyChooseUs></WhyChooseUs>
      <SpecialOffer></SpecialOffer>
      <PackageOffers></PackageOffers>
    

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
            <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3`}>
              Rólunk egy pár szó..
            </h3>
            <p className={`${lato.className} text-base md:text-lg m-3 leading-5`}>
              Csapatunk 2024ben alakult, jelenleg 2főt számlál. Mögöttünk több
              év fejlesztésben szerzett tapasztalat. Csapatunk tagjai dolgoztak
              már egészségügyi szoftvereken,időpont foglaló rendszereken,
              különböző weboldalakon. Imádjuk a kihívásokat, és a különböző
              érdekesebbnél érdekesebb projekteket. Ha kérdésed van nyugodtan
              keress minket
            </p>
            <span className={`${inter.className} inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-3 mt-3 uppercase text-xs md:text-sm text-cyellow font-bold`}>
              Kérdésem Van
            </span>
          </div>
        </div>
      </div>

      <ToggleDiv />

      <Footer />
    </div>
  );
}
