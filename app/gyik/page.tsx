"use client"
import Image from "next/image";
import Navigation from "../_Components/Navigation";
import gyakImg from "../_Assets/gyakImg.png"
import { poppins } from "../_Utils/fonts";
import GyikCollapseItem from "../_Components/GyikCollapseItem";
import Form from "../_Components/Form";
import Footer from "../_Components/Footer";
export interface gyakDataObject {
    title:string,
    content:string,
}
const gyakData : gyakDataObject[]=[
    {
        title:"Mennyibe kerül egy weboldal?",
        content:"A weboldal készítés költségei jelentősen eltérhetnek attól függően, hogy milyen típusú weboldalra van szükséged. Három csomagot kínálunk, hogy minden igényt kielégítsünk: \n <strong> Statikus weboldal: </strong> Ez a leggyorsabban fejleszthető és legköltséghatékonyabb megoldás. Ideális választás, ha egy egyszerű, jól struktúrált online jelenlétre van szükséged, és nincsenek különleges funkciókra vonatkozó igényeid. \n  <strong>Normál weboldal:</strong> Egy kicsit drágább, de cserébe több funkciót és testreszabhatóságot kínál. Ez a csomag ideális, ha szeretnél egy professzionális megjelenést és több interaktív elemet a weboldaladon. \n <strong> Egyedi ötlet: </strong> Ha egy teljesen egyedi és különleges weboldalt szeretnél, ahol a design és a funkcionalitás szabadon alakítható, akkor ez a csomag a neked való. Ez a legdrágább, de teljesen a te igényeidhez igazodik. \n <strong>Árak: </strong> A weboldal készítés költsége 80 000 Ft-tól akár 500 000 Ft-ig terjedhet, a választott csomagtól függően. \n <strong>Fontos megjegyezni </strong>, hogy a weboldalaknak havi fenntartási díja is van, amely 2500 Ft-tól 6000 Ft-ig terjedhet. Ez a díj magában foglalja a tárhely, a domain név és egyéb szükséges szolgáltatások költségeitAz igényeidtől függően segítünk megtalálni a legjobb megoldást, hogy az elképzeléseidnek megfelelő weboldalad legyen!",
    },
    {
        title:"Mennyi idő a fejlesztés?",
        content:"A weboldal fejlesztésének időtartama több tényezőtől is függ, mint például a választott csomag, a projekt komplexitása, és attól, hogy mennyire összeszedett ötlettel érkezik a megrendelő. A következő időintervallumokra számíthatsz a különböző csomagok esetében: \n <strong>Statikus weboldal:</strong> Ez a típusú weboldal gyorsan elkészíthető, általában 1-2 hónap alatt megvalósítható. Ez a leggyorsabb megoldás, ha egy egyszerű, stabil online jelenlétet szeretnél \n <strong>Normál weboldal:</strong> A fejlesztés ideje itt kicsit hosszabb, mivel több funkciót és testreszabást tartalmaz. Általában 1-4 hónap szükséges ahhoz, hogy a weboldalad elkészüljön \n <strong>Egyedi ötlet:</strong> Ez a legösszetettebb és legtöbb időt igénylő csomag. Ha egy teljesen egyedi, komplex weboldalt szeretnél, a fejlesztési idő akár 1 hónaptól 1 évig is terjedhet, a projekt nagyságától és komplexitásától függően \n A fejlesztési idő nemcsak a weboldal típusától, hanem a te igényeidtől is függ. Ha pontos elképzelésekkel és jól összeszedett ötletekkel érkezel, az segít felgyorsítani a folyamatot. Viszont ha a projekt komplex, és több iteráció szükséges a véglegesítéshez, az megnövelheti az időtartamot \n Együttműködésünk során mindent megteszünk annak érdekében, hogy a lehető <strong> leghatékonyabban </strong> és az igényeidnek megfelelően készüljön el a weboldalad!"
    },
    {
        title:"Írtam emailt, de még nem kaptam választ..",
        content:"Minden ügyfelünkre nagy figyelmet fordítunk, és igyekszünk időben válaszolni minden e-mailre. Ha azonban több nap elteltével sem kaptál választ, kérlek, ne habozz újra felvenni velünk a kapcsolatot. Lehetséges, hogy e-mailed valamilyen okból nem érkezett meg hozzánk, vagy véletlenül lemaradt a válaszadás. Minden kérdésed fontos számunkra, és szeretnénk biztosítani, hogy minél előbb megkapd a szükséges információkat és segítséget."
    },
    {
        title:"Milyen információkra van szükség a fejlesztéshez?",
        content:"A weboldal fejlesztéséhez néhány kulcsfontosságú információra van szükség, hogy a lehető legjobban tudjuk megvalósítani az elképzeléseidet: \n <strong>Koncepció, ötlet, elképzelés:</strong> Jó, ha már van egy alapvető koncepciód vagy ötleted arról, hogyan szeretnéd, hogy a weboldalad kinézzen és működjön. Ha még nincs, semmi gond – közösen ki tudunk találni egy megfelelő irányt, amely megfelel a vállalkozásod céljainak \n <strong>Vállalkozásod átbeszélése:</strong> Későbbi beszélgetés során részletesen átbeszéljük a vállalkozásod, hogy jobban megértsük a céljaidat és igényeidet \n <strong>Logo, képek, szöveg:</strong> Ha rendelkezel logóval, képekkel vagy előkészített szövegekkel, az nagyban segítheti a fejlesztést. Ezek az anyagok hozzájárulnak a weboldal egyedi megjelenéséhez és tartalmához. Ha még nincsenek meg, semmi probléma – segítünk beszerezni vagy elkészíteni azokat, de ez több időt igényelhet \n Mindezeket az információkat és anyagokat igyekszünk összegyűjteni és felhasználni, hogy a weboldalad a lehető legjobban tükrözze a vállalkozásod egyediségét és céljait. Ha bármilyen kérdésed van a szükséges anyagokkal kapcsolatban, vagy nem vagy biztos abban, mit hogyan kellene biztosítani, szívesen segítünk!"
    }
]

const doNothing = (event:React.MouseEvent) => {
    event.preventDefault(); // Megakadályozza az alapértelmezett link működést
  };
export default function Page(){
    return(
        <div className="flex flex-col gap-4">
            <Navigation></Navigation>
            <div className=" w-full flex flex-col gap-4 items-center justify-center p-4">
                <h1 className="text-cyellow font-bold uppercase text-4xl">n&m web</h1>
                <h1 className="text-cyellow uppercase text-xl">GYIK</h1>
                <div className="rounded-full border w-1/4 bg-cyellow">
                    <a href="https://storyset.com/online" onClick={doNothing}>
                        <Image src={gyakImg} alt="logo" className="object-contain" />
                    </a>
                </div>
            </div>

            <div className="flex justify-center m-3 mb-12 ">
                <h1 className={`font-bold h1 ${poppins.className}`}>Ha bármi kérdésed van,itt megtalálod a választ</h1>
            </div>

            <div className="md:mx-[272px]  flex flex-col gap-16 mb-12">
             
                    {gyakData.map((item:gyakDataObject,index)=>
                        <GyikCollapseItem
                        key={index}
                        content={item.content} 
                        title={item.title}/>
                    )}
               
            </div>

            <div className="flex justify-center m-3 mb-12 ">
                <h2 className={`font-bold h1 ${poppins.className}`}>Van olyan téma, ami nincs érintve a fentiekben?</h2>
            </div>


            <div className="md:mx-[272px]">
                <Form message></Form>
            </div>
            <Footer></Footer>
        </div>
    )
}