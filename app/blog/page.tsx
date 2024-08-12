"use client";

import { useState } from "react";
import Image from "next/image";
import creator from "../_Assets/Wall post-rafiki.png";

import poszt1 from "../_Assets/posts/1. poszt.png";
import poszt2 from "../_Assets/posts/2. poszt.png";
import poszt3 from "../_Assets/posts/3. poszt.jpg";
import poszt4 from "../_Assets/posts/4. poszt.png";
import poszt5 from "../_Assets/posts/5. poszt.png";
import poszt6 from "../_Assets/posts/6. poszt.jpg";
import poszt7 from "../_Assets/posts/7. poszt.jpg";
import poszt8 from "../_Assets/posts/8. poszt.jpg";
import poszt9 from "../_Assets/posts/9. poszt.jpg";
import poszt10 from "../_Assets/posts/10. poszt.png";
import poszt11 from "../_Assets/posts/11. poszt.png";
import poszt12 from "../_Assets/posts/12. poszt.png";
import poszt13 from "../_Assets/posts/13. poszt.jpg";
import poszt14 from "../_Assets/posts/14. poszt.png";
import poszt15 from "../_Assets/posts/15. poszt.jpg";
import poszt16 from "../_Assets/posts/16. poszt.png";
import poszt17 from "../_Assets/posts/17. poszt.jpg";
import poszt18 from "../_Assets/posts/18. poszt.png";
import poszt19 from "../_Assets/posts/19. poszt.png";

import Footer from "../_Components/Footer";
import Header from "../_Components/Navigation";
import Card from "../_Components/Card";

export const cardsData = [
  {
    title: "Mi is az a frontend fejlesztés?",
    imageSrc: poszt1,
    hashtags: ["weboldal", "penz"],
    slug: "mi-is-az-a-fronted-fejlesztes",
    text: "A frontend fejlesztés a weboldalak és webes alkalmazások látható részeinek kialakítását jelenti. Ide tartozik a dizájn, a felhasználói élmény (UX) és az interakciók megvalósítása. A frontend fejlesztők HTML, CSS és JavaScript segítségével hozzák létre azt a felületet, amellyel a felhasználók közvetlenül érintkeznek. Ti mit gondoltok, mi a legfontosabb egy jól működő weboldalon?",
  },
  {
    title: "A responsive design fontossága",
    imageSrc: poszt2,
    hashtags: ["weboldal", "mobil"],
    slug: "a-responsive-design-fontossaga",
    text: "Tudtad, hogy a responsive design segítségével a weboldalak minden eszközön tökéletesen megjelennek? Legyen szó okostelefonról, tabletről vagy asztali számítógépről, a responsive design gondoskodik róla, hogy a felhasználói élmény mindig optimális legyen. Neked mennyire fontos, hogy egy weboldal mobilbarát legyen? Írd meg kommentben!",
  },
  {
    title: "Hogyan dolgozunk? - A fejlesztési folyamat",
    imageSrc: poszt3,
    hashtags: ["SEO", "keresőoptimalizálás"],
    slug: "hogyan-dolgozunk",
    text: "Nálunk a webfejlesztés nem csak a kódolásról szól. Az első lépés a részletes tervezés és konzultáció, hogy pontosan megértsük ügyfeleink igényeit. Ezt követi a design és a fejlesztés, majd a tesztelés és finomhangolás. Végül, de nem utolsó sorban, a folyamatos karbantartás és támogatás is része a szolgáltatásainknak. Miért fontos szerintetek a részletes tervezés egy weboldal fejlesztésekor? Írjátok meg kommentben",
  },
  {
    title: "Fullstack fejlesztés - Az átfogó megoldás",
    imageSrc: poszt4,
    hashtags: ["webdesign", "trendek"],
    slug: "fullstack-fejlesztes",
    text: "A fullstack fejlesztés magában foglalja mind a frontend, mind a backend fejlesztést. Ez azt jelenti, hogy egy fullstack fejlesztő képes a teljes webalkalmazás létrehozására a felhasználói felülettől kezdve az adatbázis kezeléséig. Nálunk a N&M Web-nél teljeskörű fullstack szolgáltatásokat is nyújtunk, hogy egy helyen kapd meg a teljes webes megoldást. Te melyik részét tartod izgalmasabbnak a webfejlesztésnek: a frontend vagy a backend fejlesztést? Írd meg nekünk kommentben!",
  },
  {
    title: "Frontend vs. Backend fejlesztés",
    imageSrc: poszt5,
    hashtags: ["UX", "UI", "design"],
    slug: "frontend-vs-backend",
    text: "Mi a különbség a frontend és a backend fejlesztés között? A frontend a weboldalak látható részeit foglalja magába, amelyeket a felhasználók közvetlenül látnak és használnak. Ide tartozik a dizájn, az elrendezés, a navigáció és az interaktív elemek. A backend ezzel szemben a háttérben zajlik, és az adatkezeléssel, szerverrel és adatbázisokkal kapcsolatos műveleteket foglalja magába. Melyik terület izgalmasabb szerintetek? Írjátok meg kommentben",
  },
  {
    title: "A design fontossága a webfejlesztésben",
    imageSrc: poszt6,
    hashtags: ["domain", "weboldal"],
    slug: "a-design-fontossaga-a-webfejlesztesben",
    text: "A weboldalak designja kulcsfontosságú a látogatók első benyomásának kialakításában. Egy jól megtervezett weboldal nemcsak esztétikus, de felhasználóbarát és könnyen navigálható is. A megfelelő design segít abban, hogy a látogatók könnyen megtalálják a keresett információt, és pozitív élményt nyújtson számukra.  Nektek mi a legfontosabb egy weboldal dizájnjában? Írjátok meg kommentben!",
  },
  {
    title: "Miért van szüksége egy kezdő vállalkozásnak weboldalra?",
    imageSrc: poszt7,
    hashtags: ["reszponzív", "weboldal"],
    slug: "miert-van-szuksege-egy-kezdo-vallalkozasnak-weboldalra",
    text: "Weboldal a kezdő vállalkozások számára az online jelenlét alapköve. Lehetőséget biztosít arra, hogy bemutassák termékeiket és szolgáltatásaikat, elérhetővé váljanak az érdeklődők számára, és professzionális képet sugározzanak magukról. Gondoljunk csak bele, hányan keresnek rá egy cégre az interneten, mielőtt kapcsolatba lépnének velük! Ti hogyan találtátok meg az utolsó szolgáltatót, akivel kapcsolatba léptetek? Írjátok meg kommentben!",
  },
  {
    title: "A weboldal előnyei haladó vállalkozások számára",
    imageSrc: poszt8,
    hashtags: ["gyors", "weboldal"],
    slug: "a-weboldal-elonyei-halado-vallalkozasok-szamara",
    text: "Még ha egy vállalkozás már be is futott, egy modern és jól karbantartott weboldal kulcsfontosságú lehet a további növekedéshez. A weboldal folyamatos fejlesztése és frissítése segít abban, hogy a vállalkozás lépést tartson a piaci trendekkel, és mindig naprakész információkat kínáljon az ügyfeleknek. Milyen gyakran szoktatok frissíteni weboldalatokat, ha vállalkozásotok van? Írjátok meg kommentben!",
  },
  {
    title: "A weboldal szerepe az ügyfélkapcsolatokban",
    imageSrc: poszt9,
    hashtags: ["webáruház", "e-kereskedelem"],
    slug: "a-weboldal-szerepe-az-ugyfelkapcsolatokban",
    text: "Egy professzionális weboldal megkönnyíti az ügyfelekkel való kommunikációt és kapcsolattartást. Lehetővé teszi az online időpontfoglalást, azonnali üzenetküldést és a gyakori kérdések (FAQ) szekcióját, amely segít az ügyfelek gyors és hatékony kiszolgálásában.  Hogyan léptek kapcsolatba ti az ügyfeleitekkel a weboldalon keresztül? Írjátok meg kommentben!",
  },
  {
    title: "Az UI/UX tesztelés fontossága a webfejlesztés során",
    imageSrc: poszt10,
    hashtags: ["UI", "UX", "tesztelés", "weboldal"],
    slug: "az-ui-ux-teszteles-fontossaga-a-webfejlesztes-soran",
    text: "Egy jól működő weboldal nem csak a dizájn és a fejlesztés eredménye. Az alapos UI/UX tesztelés elengedhetetlen ahhoz, hogy a felhasználói élmény gördülékeny legyen. Tesztelési folyamatunk során valós felhasználói interakciókat szimulálunk, hogy biztosak legyünk abban, hogy az oldal minden eszközön és böngészőben optimálisan működik. Milyen tapasztalataitok vannak a weboldalak tesztelésével kapcsolatban? Írjátok meg kommentben!",
  },
  {
    title: "Miért fontos a keresőoptimalizálás (SEO) a webfejlesztésben?",
    imageSrc: poszt11,
    hashtags: ["SEO", "keresőoptimalizálás", "webfejlesztés"],
    slug: "miert-fontos-a-keresooptimalizalas-seo-a-webfejlesztesben",
    text: "A keresőoptimalizálás (SEO) egy weboldal sikerének egyik kulcsa. A megfelelő SEO technikák alkalmazásával a weboldalak könnyebben megtalálhatók a keresőmotorokban, ami több látogatót és potenciális ügyfelet jelent. A fejlesztési folyamatunk során kiemelt figyelmet fordítunk a SEO-ra, hogy ügyfeleink weboldalai a lehető legjobb helyezést érjék el. Mennyire tartjátok fontosnak a SEO-t a saját weboldalatok esetében?",
  },
  {
    title: "Webes biztonság - Miért fontos a védelem?",
    imageSrc: poszt12,
    hashtags: ["webbiztonság", "adatvédelem", "weboldal"],
    slug: "webes-biztonsag-miert-fontos-a-vedelem",
    text: "A webes biztonság egyre fontosabbá válik a digitális világban. Egy jól védett weboldal megóvhatja az ügyfelek adatait, és biztosítja, hogy a weboldal ne váljon támadások célpontjává. Mi, az N&M Web-nél nagy hangsúlyt fektetünk a biztonságos kódolási gyakorlatokra és a legújabb védelmi technológiák alkalmazására. Nektek milyen tapasztalataitok vannak a webes biztonsággal kapcsolatban?",
  },
  {
    title: "A weboldal karbantartásának jelentősége",
    imageSrc: poszt13,
    hashtags: ["webkarbantartás", "frissítés", "weboldal"],
    slug: "a-weboldal-karbantartasanak-jelentosege",
    text: "Egy weboldal elkészítése csak az első lépés. A rendszeres karbantartás és frissítés biztosítja, hogy az oldal mindig naprakész és biztonságos maradjon. A N&M Web-nél külön karbantartási szolgáltatást is kínálunk, hogy ügyfeleink mindig nyugodtak lehessenek weboldaluk állapota felől. Ti milyen gyakran frissítitek és karbantartjátok a weboldalatokat?",
  },
  {
    title: "Mesterséges intelligencia (AI) integrálása a webfejlesztésbe",
    imageSrc: poszt14,
    hashtags: ["AI", "mesterségesintelligencia", "webfejlesztés"],
    slug: "mesterseges-intelligencia-ai-integralasa-a-webfejlesztesbe",
    text: "Az AI-technológiák integrálása a webfejlesztésbe izgalmas lehetőségeket kínál. Legyen szó chatbotokról, személyre szabott ajánlatokról vagy automatikus ügyfélszolgálatról, a mesterséges intelligencia új dimenziókat nyit meg a felhasználói élményben. Az N&M Web-nél már dolgozunk AI-alapú megoldásokon is, hogy ügyfeleink a legmodernebb technológiákat alkalmazhassák weboldalaikon. Mit gondoltok, hogyan javíthatja az AI a weboldalaitokat?",
  },
  {
    title: "Milyen előnyökkel jár a webalkalmazások használata?",
    imageSrc: poszt15,
    hashtags: ["webalkalmazás", "fejlesztés", "hatékonyság"],
    slug: "milyen-elonyokkel-jar-a-webalkalmazasok-hasznalata",
    text: "A webalkalmazások egyre népszerűbbek a vállalkozások körében, hiszen platformfüggetlenek, könnyen elérhetők bármilyen eszközről, és nem igényelnek telepítést. Legyen szó ügyfélkezelő rendszerekről, belső vállalati platformokról vagy akár e-kereskedelmi megoldásokról, a webalkalmazások rugalmasságot és hatékonyságot kínálnak. Az N&M Web-nél bonyolultabb webalkalmazások fejlesztésére is specializálódtunk. Ti használtok már valamilyen webalkalmazást a munkátok során?",
  },
  {
    title: "Az e-kereskedelem fejlődése - Hogyan lépést tartani?",
    imageSrc: poszt16,
    hashtags: ["ecommerce", "webáruház", "digitálisfejlődés"],
    slug: "az-e-kereskedelem-fejlodese-hogyan-lepest-tartani",
    text: "Az e-kereskedelem folyamatosan fejlődik, és a vállalkozásoknak fontos lépést tartaniuk az új trendekkel, hogy versenyképesek maradjanak. Az N&M Web-nél segítünk modern, gyors és biztonságos e-kereskedelmi weboldalakat létrehozni, amelyek megkönnyítik az online vásárlást. Nektek milyen kihívásokkal kellett szembenéznetek az e-kereskedelem világában?",
  },
  {
    title: "Mik azok a REST API-k, és miért fontosak a webfejlesztésben?",
    imageSrc: poszt17,
    hashtags: ["API", "REST", "integráció", "webfejlesztés"],
    slug: "mik-azok-a-rest-api-k-es-miert-fontosak-a-webfejlesztesben",
    text: "A REST API-k a modern webfejlesztés kulcsfontosságú elemei, lehetővé téve különböző rendszerek közötti kommunikációt. Segítségükkel zökkenőmentesen integrálhatók külső szolgáltatások és adatforrások a webalkalmazásokba, így azok rugalmasabbak és sokoldalúbbak lesznek. Az N&M Web-nél nagy tapasztalattal rendelkezünk REST API-k fejlesztésében és integrálásában. Milyen API-kat használtatok már a projektjeitekben?",
  },
  {
    title: "Az oldalbetöltési sebesség fontossága a felhasználói élményben",
    imageSrc: poszt18,
    hashtags: ["sebesség", "UX", "SEO", "weboldal"],
    slug: "az-oldalbetoltesi-sebesseg-fontossaga-a-felhasznaloi-elmenyben",
    text: "Tudtad, hogy a weboldalak betöltési sebessége közvetlenül befolyásolja a felhasználói élményt és a konverziókat? Egy lassan betöltődő oldal elveszítheti látogatóit, és negatív hatással lehet a SEO-ra is. Az N&M Web-nél optimalizáljuk az oldalbetöltési sebességet, hogy a látogatók mindig elégedettek legyenek. Hogyan tapasztaltátok, hogy a sebesség hatással van az oldalatok forgalmára?",
  },
  {
    title: "Progresszív webalkalmazások (PWA) - A jövő webes élménye",
    imageSrc: poszt19,
    hashtags: ["PWA", "webfejlesztés", "mobilfejlesztés"],
    slug: "progressziv-webalkalmazasok-pwa-a-jovo-webes-elmenye",
    text: "A progresszív webalkalmazások (PWA) a weboldalak és a natív mobilalkalmazások legjobb tulajdonságait egyesítik. Offline működési képesség, gyors betöltés, és app-szerű élmény – ezek csak néhány előnyei a PWA-knak. Az N&M Web-nél már dolgozunk ilyen modern megoldásokon is. Gondolkoztatok már PWA fejlesztésén? Mi lenne a legnagyobb előny számotokra?",
  },
];

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Minden oldalon megjelenő posztok száma

  // Lapozás
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cardsData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(cardsData.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const doNothing = (event) => {
    event.preventDefault(); // Megakadályozza az alapértelmezett link működést
  };

  return (
    <>
      <Header />

      <div className="bg-cyellow bg-opacity-20 w-full flex flex-col items-center justify-center p-4">
        <h1 className="text-cyellow font-bold uppercase text-4xl">n&m web</h1>
        <h1 className="text-cyellow uppercase text-xl">blog</h1>
        <div className="rounded-full border w-1/4 bg-cyellow">
          <a href="https://storyset.com/online" onClick={doNothing}>
            <Image src={creator} alt="logo" className="object-contain" />
          </a>
        </div>
      </div>

      <div className="flex justify-center m-3 mb-12 pb-48 border-b-2 border-b-cyellow">
        <h1 className="font-bold text-4xl">Hasznos cikkek, információk</h1>
      </div>

      <div className="w-full flex justify-center items-center gap-24 flex-col px-4 py-8">
        {currentPosts.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            hashtags={card.hashtags}
            slug={card.slug}
            text={card.text}
          />
        ))}

        <div className="flex justify-center md:w-2/4 lg:w-2/4 m-4 px-4">
          <nav>
            <ul className="flex space-x-2">
              <li>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-500"
                      : "bg-cyellow text-white"
                  }`}
                >
                  Előző
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <li key={number}>
                    <button
                      onClick={() => paginate(number)}
                      className={`px-3 py-1 rounded ${
                        number === currentPage
                          ? "bg-cyellow text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {number}
                    </button>
                  </li>
                )
              )}

              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-500"
                      : "bg-cyellow text-white"
                  }`}
                >
                  Következő
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
}
