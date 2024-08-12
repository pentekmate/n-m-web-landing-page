"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { lato } from "../_Utils/fonts";
import SubmitModal from "./SubmitModal";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  tier: string;
  consent: boolean;
  message?: string;
}

type FromProps = {
  tier?: boolean;
  message?: boolean;
  selectedPackage?: string | null;
};

export default function Form({ tier, message, selectedPackage }: FromProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    tier: "",
    message: "",
    consent: false,
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [responseMessageType, setResponseMessageType] = useState<boolean | null>(null);

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

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        tier: selectedPackage,
      }));
    }
  }, [selectedPackage]);



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.consent && formData.email && formData.phone) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
    
      if(response.status===500){
        setResponseMessage("Hiba lépett fel az email küldése közben");
        setResponseMessageType(false);
      }
      else{
        setResponseMessage(data.message || "Köszönjük bizalmadat!\n Munkatársunk hamarosan felveszi veled a kapcsolatot!");
        setResponseMessageType(true);
      }
    } else {
      setResponseMessage("Kérlek töltsd ki a hiányzó mezőket.");
      setResponseMessageType(false);
    }

    // setTimeout(() => {
    //   setResponseMessage(null);
    //   setResponseMessageType(null);
    // }, 5000);
  };
  const resetMesseage=()=>{
    setResponseMessage(null);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cyellow bg-opacity-20 rounded-xl w-full flex flex-col h-fit px-4 gap-4 py-4 items-center justify-center"
    >
      <input
        type="text"
        name="name"
        placeholder="Név"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-4 placeholder-gray-500 rounded-full"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail cím"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-4 placeholder-gray-500 rounded-full"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefonszám"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-4 placeholder-gray-500 rounded-full"
      />
      {tier && (
        <div className="relative w-full">
          <select
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            className="w-full p-4 placeholder-gray-500 rounded-full bg-white border border-gray-300"
          >
            <option value="" disabled>
              Melyik csomagunk érdekli?
            </option>
            <option value="statikus-weboldal">Statikus weboldal</option>
            <option value="normal-weboldal">Normál weboldal</option>
            <option value="egyedi-otlet">Egyedi ötlet</option>
            <option value="meg-nem-dontottem">Még nem döntöttem</option>
          </select>
        </div>
      )}

      {message && (
        <textarea
          name="message"
          placeholder="Üzenet"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 placeholder-gray-500 rounded-lg"
        ></textarea>
      )}

      <div className="w-full flex items-center space-x-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
        />
        <label className="italic">
          Hozzájárulok a megadott adataim kapcsolatfelvétel céljából történő
          kezeléséhez.
        </label>
      </div>
      <button
        type="submit"
        className="bg-cyellow w-2/4 p-2 text-white rounded-full"
      >
        Küldés
      </button>
      {responseMessage && (
        <SubmitModal onClick={resetMesseage} responseMessage={responseMessage} responseMessageType={responseMessageType} ></SubmitModal>
      )}
    </form>
  );
}
