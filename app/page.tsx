import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";

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

import ToggleDiv from "./_Components/ToggleDiv";
import Footer from "./_Components/Footer";
import Header from "./_Components/Header";
import PackageCard from "./_Components/PackageCard";
import Button from "./_Components/Button";

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="w-full flex flex-col  md:px-[90px] md:flex-row h-fit">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="flex justify-center items-center md:items-start flex-col gap-20">
            <div className="flex  items-center md:items-start flex-col gap-8">
              <h3 className={`text-2xl md:text-[61px] font-bold  ${poppins.className}`}>
                Egyedi webfejlesztés
              </h3>
              <p className={`text-base md:text-start text-center px-30 text-fgrey md:text-[30px] font-light  md:leading-[40px] ${lato.className}`}>
                Ahol a kreatív megoldások, egyedi ötletek megvalósításra kerülnek. <br />
                Megoldásainkat azok az üzemeltetők választják, akiknek <br /> fontos az
                egyedi megjelenés és a működés hosszú távon.
              </p>
            
            </div>
            
            <div className="flex gap-4">
              <Button text="tudj meg többet" type="secondary" icon={ <Image
                  src={downArrow}
                  alt="logo"
                  width={15}
                  height={15}
                  className="ml-2 md:ml-3"
                />}></Button>
              <Button text="ajánlatot kérek" type="primary"></Button>
            </div>
         
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
              <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3`}>
                Miért van szüksége egy vállalkozásnak weboldalra?
              </h3>
              <Image
                src={arrow}
                alt="logo"
                className="-rotate-12 translate-y-5"
              />
            </div>
            <p className={`${lato.className} text-base md:text-lg m-3 leading-5`}>
              Egy vállalkozásnak weboldalra van szüksége, mert ez biztosítja az
              online jelenlétet és növeli a hitelességet. Lehetővé teszi a
              termékek és szolgáltatások bemutatását, valamint az ügyfelekkel
              való kapcsolattartást. Emellett a jól optimalizált weboldal segít
              az új ügyfelek megszerzésében és az üzleti növekedésben.
            </p>
            <Link href="/blog" className={`${inter.className} inline-flex items-center border-cyellow border rounded-full justify-center px-3 py-2 md:px-4 md:py-3 mx-3 mt-3 uppercase text-xs md:text-sm text-cyellow font-bold`}>
              Tovább a blogra
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center items-center mt-[35px] p-4 mt-24 mb-24">
        <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3`}>
          Miért válassz minket?
        </h3>
        <div className="flex flex-wrap justify-center">
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={pontossag} alt="pontossag" width={65} className="m-3" />
            <span className={`${lato.className} font-bold`}>Pontosság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image src={gyorsasag} alt="gyorsasag" width={65} className="m-3" />
            <span className={`${lato.className} font-bold`}>Gyorsaság</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={alacsony_ar}
              alt="alacsony_ar"
              width={65}
              className="m-3"
            />
            <span className={`${lato.className} font-bold`}>Alacsony ár</span>
          </div>
          <div className="items-center justify-center flex flex-col mx-7 md:mx-12">
            <Image
              src={megbizhatosag}
              alt="megbizhatosag"
              width={65}
              className="m-3"
            />
            <span className={`${lato.className} font-bold`}>Megbízhatóság</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row md:h-[450px] bg-cyellow bg-opacity-10 p-10">
        <div className="w-full md:w-1/2 flex p-4 flex-wrap">
          <div>
            <h6 className={`${inter.className} text-cyellow uppercase ml-3`}>Egyedi ajánlat!</h6>
            <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3`}>
              Webfejlesztés szinte ingyen!
            </h3>
            <p className={`${lato.className} text-base md:text-lg ml-3 leading-5`}>
              Az N&M Web elindulása alkalmából teljesen ingyenes fejlesztési
              költségi akciót hírdetünk. Célünk, hogy{" "}
              <span className="text-cyellow">együtt növekedjünk.</span> Így az
              első 3 ügyfélnek , fejlesztési költségektől mentesen készítünk
              weboldalt.
            </p>
            <p className={`${lato.className} text-cyellow font-bold ml-3 text-xl`}>
              Ne hagyd ki ezt az egyedi ajánlatot, és kérj ajánlatot még ma!
            </p>
          </div>
          <div className="ml-3 mt-3">
            <span
              className={`${inter.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white px-3 py-2 md:px-4 md:py-3 mt-3 uppercase text-xs md:text-sm font-bold`}
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
        <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3 uppercase`}>
          Lássuk milyen csomagok közül válogathatsz
        </h3>
        <p className={`${lato.className}`}>Hogy megtaláld számodra a legjobbat.</p>

        <div className="flex flex-wrap justify-center items-center">

          <PackageCard 
            title="Statikus Weboldal"
            desription="Egyszerű weboldal, statikus tartalommal."
            items={[{avaliable:false,value:"Admin oldal"},
              {avaliable:false,value:"Oldal szerkeszthetőség"},
              {avaliable:true,value:"Gyors fejlesztési idő"},
              {avaliable:true,value:"Tech support"},
              {avaliable:true,value:"Egyedi design"},
            ]}></PackageCard>

          <PackageCard 
            title="Normál Weboldal"
            desription="Normál weboldal, vállalkozásoknak."
            items={[{avaliable:true,value:"Admin oldal"},
              {avaliable:true,value:"Oldal szerkeszthetőség"},
              {avaliable:true,value:"Gyors fejlesztési idő"},
              {avaliable:true,value:"Tech support"},
              {avaliable:true,value:"Egyedi design"},
            ]}></PackageCard>

          <PackageCard 
            title="Egyedi Ötlet"
            desription="Ha egyedi ötleted van,abban is segítünk"
            items={[{value:"Lehetőségek kapcsán kérlek érdeklődj!",avaliable:null}]}></PackageCard>
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
            <h3 className={`${poppins.className} text-2xl md:text-3xl font-bold m-3`}>
              Rólunk egy pár szó
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
    </>
  );
}
