import { useState } from "react";
import { lato, poppins } from "../_Utils/fonts";
import PackageCard from "./PackageCard";
import ToggleDiv from "./ToggleDiv";

export default function PackageOffers(){
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTier,setSelectedTier]=useState<null | string>(null)

  const toggleVisibility = (packageName:string) => {
    setSelectedTier(packageName)
    if(selectedTier!==packageName && isVisible===false){
      setIsVisible(!isVisible);
      setTimeout(() => {
        if(isVisible===false){
          ScrollToElement()
        }
      }, 200);
    }
    else if(selectedTier===packageName && isVisible === true){
      setIsVisible(!isVisible)
      setSelectedTier(null)
    }
    
  };

  function ScrollToElement(){
    const scrolltoElement = document.getElementById('packageForm')
    if(scrolltoElement)
      window.scrollTo({
        top:scrolltoElement.offsetTop-250,
        behavior:'smooth'
      })
       
  }
    return(
      <>
      <div id='tier' className="text-center flex px-4 flex-col gap-6 items-center my-12 xl:my-24">
        <h3 className={`${poppins.className} h2`}>
          Lássuk milyen csomagok közül válogathatsz
        </h3>
        <p className={`${lato.className} font-light `}>Hogy megtaláld számodra a legjobbat.</p>

        <div data-aos="fade-right" className="flex flex-wrap justify-center items-center">

          <PackageCard
            onClick={()=>{toggleVisibility("statikus-weboldal")}}
            title="Statikus Weboldal"
            desription="Egyszerű weboldal, statikus tartalommal."
            items={[{ avaliable: false, value: "Admin oldal" },
            { avaliable: false, value: "Oldal szerkeszthetőség" },
            { avaliable: true, value: "Gyors fejlesztési idő" },
            { avaliable: true, value: "Tech support" },
            { avaliable: true, value: "Egyedi design" },
            ]}></PackageCard>

          <PackageCard
            onClick={()=>{toggleVisibility("normal-weboldal")}}
            title="Normál Weboldal"
            desription="Normál weboldal, vállalkozásoknak."
            items={[{ avaliable: true, value: "Admin oldal" },
            { avaliable: true, value: "Oldal szerkeszthetőség" },
            { avaliable: true, value: "Gyors fejlesztési idő" },
            { avaliable: true, value: "Tech support" },
            { avaliable: true, value: "Egyedi design" },
            ]}></PackageCard>

          <PackageCard
            onClick={()=>{toggleVisibility("egyedi-otlet")}}
            title="Egyedi Ötlet"
            desription="Ha egyedi ötleted van,abban is segítünk"
            items={[{ value: "Lehetőségek kapcsán kérlek érdeklődj!", avaliable: null }]}></PackageCard>
        </div>
      </div>
      <ToggleDiv selectedPackage={selectedTier} formId="packageForm" isVisible={isVisible}></ToggleDiv>
      </>
    )
}