import Image from "next/image";
import creator from "../_Assets/Wall post-rafiki.png";
import Penz from "../_Assets/penz.jpg";

import Footer from "../_Components/Footer";
import Header from "../_Components/Navigation";
import Card from "../_Components/Card";

export const cardsData = [
  {
    title: "Mi is az a frontend fejlesztés?",
    imageSrc: Penz,
    hashtags: ["weboldal", "penz"],
    slug: 'mi-is-az-a-fronted-fejlesztes',
    text: "A frontend fejlesztés a weboldalak és webes alkalmazások látható részeinek kialakítását jelenti. Ide tartozik a dizájn, a felhasználói élmény (UX) és az interakciók megvalósítása. A frontend fejlesztők HTML, CSS és JavaScript segítségével hozzák létre azt a felületet, amellyel a felhasználók közvetlenül érintkeznek. Ti mit gondoltok, mi a legfontosabb egy jól működő weboldalon?"
  },
  {
    title: "A responsive design fontossága",
    imageSrc: Penz,
    hashtags: ["weboldal", "mobil"],
    slug: 'a-responsive-design-fontossaga',
    text: "Tudtad, hogy a responsive design segítségével a weboldalak minden eszközön tökéletesen megjelennek? Legyen szó okostelefonról, tabletről vagy asztali számítógépről, a responsive design gondoskodik róla, hogy a felhasználói élmény mindig optimális legyen. Neked mennyire fontos, hogy egy weboldal mobilbarát legyen? Írd meg kommentben!"
  },
  {
    title: "Hogyan dolgozunk? - A fejlesztési folyamat",
    imageSrc: Penz,
    hashtags: ["SEO", "keresőoptimalizálás"],
    slug: 'hogyan-dolgozunk',
    text: "Nálunk a webfejlesztés nem csak a kódolásról szól. Az első lépés a részletes tervezés és konzultáció, hogy pontosan megértsük ügyfeleink igényeit. Ezt követi a design és a fejlesztés, majd a tesztelés és finomhangolás. Végül, de nem utolsó sorban, a folyamatos karbantartás és támogatás is része a szolgáltatásainknak. Miért fontos szerintetek a részletes tervezés egy weboldal fejlesztésekor? Írjátok meg kommentben"
  },
  {
    title: "Fullstack fejlesztés - Az átfogó megoldás",
    imageSrc: Penz,
    hashtags: ["webdesign", "trendek"],
    slug: 'fullstack-fejlesztes',
    text: "A fullstack fejlesztés magában foglalja mind a frontend, mind a backend fejlesztést. Ez azt jelenti, hogy egy fullstack fejlesztő képes a teljes webalkalmazás létrehozására a felhasználói felülettől kezdve az adatbázis kezeléséig. Nálunk a N&M Web-nél teljeskörű fullstack szolgáltatásokat is nyújtunk, hogy egy helyen kapd meg a teljes webes megoldást. Te melyik részét tartod izgalmasabbnak a webfejlesztésnek: a frontend vagy a backend fejlesztést? Írd meg nekünk kommentben!"
  },
  {
    title: "Frontend vs. Backend fejlesztés",
    imageSrc: Penz,
    hashtags: ["UX", "UI", "design"],
    slug: 'frontend-vs-backend',
    text: "Mi a különbség a frontend és a backend fejlesztés között? A frontend a weboldalak látható részeit foglalja magába, amelyeket a felhasználók közvetlenül látnak és használnak. Ide tartozik a dizájn, az elrendezés, a navigáció és az interaktív elemek. A backend ezzel szemben a háttérben zajlik, és az adatkezeléssel, szerverrel és adatbázisokkal kapcsolatos műveleteket foglalja magába. Melyik terület izgalmasabb szerintetek? Írjátok meg kommentben"
  },
  {
    title: "A design fontossága a webfejlesztésben",
    imageSrc: Penz,
    hashtags: ["domain", "weboldal"],
    slug: 'a-design-fontossaga-a-webfejlesztesben',
    text: "A weboldalak designja kulcsfontosságú a látogatók első benyomásának kialakításában. Egy jól megtervezett weboldal nemcsak esztétikus, de felhasználóbarát és könnyen navigálható is. A megfelelő design segít abban, hogy a látogatók könnyen megtalálják a keresett információt, és pozitív élményt nyújtson számukra.  Nektek mi a legfontosabb egy weboldal dizájnjában? Írjátok meg kommentben!"
  },
  {
    title: "Miért van szüksége egy kezdő vállalkozásnak weboldalra?",
    imageSrc: Penz,
    hashtags: ["reszponzív", "weboldal"],
    slug: 'miert-van-szuksege-egy-kezdo-vallalkozasnak-weboldalra',
    text: "Weboldal a kezdő vállalkozások számára az online jelenlét alapköve. Lehetőséget biztosít arra, hogy bemutassák termékeiket és szolgáltatásaikat, elérhetővé váljanak az érdeklődők számára, és professzionális képet sugározzanak magukról. Gondoljunk csak bele, hányan keresnek rá egy cégre az interneten, mielőtt kapcsolatba lépnének velük! Ti hogyan találtátok meg az utolsó szolgáltatót, akivel kapcsolatba léptetek? Írjátok meg kommentben!"
  },
  {
    title: "A weboldal előnyei haladó vállalkozások számára",
    imageSrc: Penz,
    hashtags: ["gyors", "weboldal"],
    slug: 'a-weboldal-elonyei-halado-vallalkozasok-szamara',
    text: "Még ha egy vállalkozás már be is futott, egy modern és jól karbantartott weboldal kulcsfontosságú lehet a további növekedéshez. A weboldal folyamatos fejlesztése és frissítése segít abban, hogy a vállalkozás lépést tartson a piaci trendekkel, és mindig naprakész információkat kínáljon az ügyfeleknek. Milyen gyakran szoktatok frissíteni weboldalatokat, ha vállalkozásotok van? Írjátok meg kommentben!"
  },
  {
    title: "A weboldal szerepe az ügyfélkapcsolatokban",
    imageSrc: Penz,
    hashtags: ["webáruház", "e-kereskedelem"],
    slug: 'a-weboldal-szerepe-az-ugyfelkapcsolatokban',
    text: "Egy professzionális weboldal megkönnyíti az ügyfelekkel való kommunikációt és kapcsolattartást. Lehetővé teszi az online időpontfoglalást, azonnali üzenetküldést és a gyakori kérdések (FAQ) szekcióját, amely segít az ügyfelek gyors és hatékony kiszolgálásában.  Hogyan léptek kapcsolatba ti az ügyfeleitekkel a weboldalon keresztül? Írjátok meg kommentben!"
  }
];


export default function Blogs() {
  return (
    <>
      <Header />

      <div className="bg-cyellow bg-opacity-20 w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-cyellow font-bold uppercase text-4xl">n&m web</h1>
        <h1 className="text-cyellow uppercase text-xl">blog</h1>
        <div className="rounded-full border w-1/4 bg-cyellow">
          <Image src={creator} alt="logo" className="object-contain" />
        </div>
      </div>

      <div className="flex justify-center m-3 pb-48 border-b-2 border-b-cyellow">
        <h1 className="font-bold text-4xl">Hasznos cikkek, információk</h1>
      </div>

      <div className="w-full border flex justify-center flex-wrap">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            hashtags={card.hashtags}
            slug={card.slug}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
