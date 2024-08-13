"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Footer from "../_Components/Footer";
import Header from "../_Components/Navigation";
import { inter, lato, poppins } from "../_Utils/fonts";

import Image from "next/image";
import Link from "next/link";

import creator from "../_Assets/contact us-bro.png";
import emailIcon from "../_Assets/email.png";
import telo from "../_Assets/mobile.png";
import facebook from "../_Assets/facebook.png";
import Navigation from "../_Components/Navigation";
import Button from "../_Components/Button";
import Form from "../_Components/Form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  tier: string;
  consent: boolean;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    tier: "",
    message: "",
    consent: false,
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseMessageType, setResponseMessageType] = useState<
    boolean | null
  >(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.consent) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseMessage(data.message || "Sikeres küldés!");
      setResponseMessageType(true);
    } else {
      setResponseMessage("Kérlek pipáld be a hozzájárulást.");
      setResponseMessageType(false);
    }

    setTimeout(() => {
      setResponseMessage(null);
      setResponseMessageType(null);
    }, 5000);
  };

  const doNothing = (event) => {
    event.preventDefault(); // Megakadályozza az alapértelmezett link működést
  };

  return (
    <>
      <Navigation />

      <div  className="flex flex-col items-center my-12 xl:my-24 md:px-[90px] px-4  gap-4 ">
        <h3
          className={`${poppins.className} h2 `}
        >
          Tedd meg első lépésed a siker felé!
        </h3>
        <p
          className={`${lato.className} p1`}
        >
          Csupán add meg adataidat, hogy felvehessük veled a kapcsolatot!
        </p>
        <div className="md:w-1/2 w-full">
        <Form tier/>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row py-10 bg-cyellow bg-opacity-20">
        <div className="w-full md:w-1/2 flex">
        <a href="https://storyset.com/business" onClick={doNothing}>
          <Image
            src={creator}
            alt="logo"
            className="w-full h-full object-contain"
          />
          </a>
        </div>
        <div  id='message'  className="w-full md:w-1/2 flex flex-col gap-4 border-l-2 border-l-cyellow px-4">
          <div className="flex flex-col gap-4">
            <h3
              className={`${poppins.className} text-2xl lg:leading-[72px]  text-[1.5rem]  md:text-[32px] lg:text-h2 font-bold  `}
            >
              N&M Web Kapcsolat
            </h3>
            <div className="flex items-center gap-4">
              <Image
                src={emailIcon}
                alt="email logo"
                className="w-8 h-8 mt-2"
              />
              <p
                className={`${lato.className} text-base md:m-3  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}
              >
                email@email.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={telo} alt="phone logo" className="w-8 h-8 mt-2" />
              <p
                className={`${lato.className} text-base md:m-3  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}
              >
                +36704228587
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={facebook}
                alt="facebook logo"
                className="w-8 h-8 mt-2"
              />
              <p
                className={`${lato.className} text-base md:m-3  md:text-start text-center px-30 text-fgrey lg:text-[30px] font-light  lg:leading-[40px]   leading-6`}
              >
                facebook
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3
              className={`${poppins.className} text-2xl lg:leading-[72px]  text-[1.5rem] md:text-[32px] lg:text-h2 font-bold  `}
            >
              Hagyj nekünk üzenetet!
            </h3>
            <div className="flex flex-col gap-4 w-full  md:w-3/4">
              <Form message/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
