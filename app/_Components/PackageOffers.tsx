import { lato, poppins } from "../_Utils/fonts";
import PackageCard from "./PackageCard";

export default function PackageOffers(){
    return(
        <div className="text-center flex flex-col gap-6 items-center mt-[35px] p-4">
        <h3 className={`${poppins.className} text-2xl  md:text-3xl font-bold m-3 uppercase`}>
          Lássuk milyen csomagok közül válogathatsz
        </h3>
        <p className={`${lato.className} font-light `}>Hogy megtaláld számodra a legjobbat.</p>

        <div className="flex flex-wrap justify-center items-center">

          <PackageCard
            title="Statikus Weboldal"
            desription="Egyszerű weboldal, statikus tartalommal."
            items={[{ avaliable: false, value: "Admin oldal" },
            { avaliable: false, value: "Oldal szerkeszthetőség" },
            { avaliable: true, value: "Gyors fejlesztési idő" },
            { avaliable: true, value: "Tech support" },
            { avaliable: true, value: "Egyedi design" },
            ]}></PackageCard>

          <PackageCard
            title="Normál Weboldal"
            desription="Normál weboldal, vállalkozásoknak."
            items={[{ avaliable: true, value: "Admin oldal" },
            { avaliable: true, value: "Oldal szerkeszthetőség" },
            { avaliable: true, value: "Gyors fejlesztési idő" },
            { avaliable: true, value: "Tech support" },
            { avaliable: true, value: "Egyedi design" },
            ]}></PackageCard>

          <PackageCard
            title="Egyedi Ötlet"
            desription="Ha egyedi ötleted van,abban is segítünk"
            items={[{ value: "Lehetőségek kapcsán kérlek érdeklődj!", avaliable: null }]}></PackageCard>
        </div>
      </div>
    )
}