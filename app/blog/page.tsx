import Image from "next/image";
import creator from "../_Assets/Wall post-rafiki.png";
import Penz from "../_Assets/penz.jpg";

import Footer from "../_Components/Footer";
import Header from "../_Components/Header";
import Card from "../_Components/Card";

export default function Blogs() {
  const cardsData = [
    {
      title: "Mennyibe kerül ma egy weboldal?",
      imageSrc: Penz,
      hashtags: ["weboldal", "penz"],
    },
    {
      title: "Miért fontos a mobilbarát weboldal?",
      imageSrc: Penz,
      hashtags: ["weboldal", "mobil"],
    },
    {
      title: "A SEO alapjai: Hogyan kerüljünk a kereső élére?",
      imageSrc: Penz,
      hashtags: ["SEO", "keresőoptimalizálás"],
    },
    {
      title: "Webdesign trendek 2024-ben",
      imageSrc: Penz,
      hashtags: ["webdesign", "trendek"],
    },
    {
      title: "Mi az a UX/UI design?",
      imageSrc: Penz,
      hashtags: ["UX", "UI", "design"],
    },
    {
      title: "Hogyan válasszunk domain nevet?",
      imageSrc: Penz,
      hashtags: ["domain", "weboldal"],
    },
    {
      title: "A reszponzív weboldal előnyei",
      imageSrc: Penz,
      hashtags: ["reszponzív", "weboldal"],
    },
    {
      title: "Miért fontos a gyors betöltési idő?",
      imageSrc: Penz,
      hashtags: ["gyors", "weboldal"],
    },
    {
      title: "Hogyan készítsünk webáruházat?",
      imageSrc: Penz,
      hashtags: ["webáruház", "e-kereskedelem"],
    },
    {
      title: "A weboldal karbantartásának fontossága",
      imageSrc: Penz,
      hashtags: ["karbantartás", "weboldal"],
    },
  ];
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

      <div className="w-full border flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            hashtags={card.hashtags}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
