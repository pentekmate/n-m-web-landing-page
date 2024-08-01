import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Ez a homePage
      <p className={`${lato.className}`}>Text proba1</p>
      <p className={`${poppins.className}`}>Text proba1</p>
      <p className={`${inter.className}`}>Text proba1</p>

      <Link href="/blog">Blog</Link>

      <div className="">
        <Image className="object-cover" quality={80} fill src="" alt="asd">

        </Image>
      </div>
    </div>


  );
}
