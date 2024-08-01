import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";
import logo from "./_Assets/logo-no-background.png";

export default function Home() {
  return (
    <>
      <div className="w-full border flex flex-wrap items-center">
        <Image src={logo} alt="logo" width={75} height={75} />
        <div className="ml-auto mr-2 flex">
          <div className="border space-x-3">
            <span className={`${lato.className}`}>Csomagok</span>
            <span className={`${lato.className}`}>Kapcsolat</span>
            <span className={`${lato.className}`}>Referencia</span>
          </div>
          <div className="ml-28 mr-9">
            <span className={`${lato.className} bg-gradient-to-br from-customStart to-customEnd p-2 rounded-full text-white`}>Ajánlatot kérek</span>
          </div>
        </div>
      </div>
      <p className={`${lato.className}`}>Text proba1</p>
      <p className={`${poppins.className}`}>Text proba1</p>
      <p className={`${inter.className} bg-red-900`}>Text proba1</p>
    </>
  );
}
