"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import Footer from '../_Components/Footer';
import Header from '../_Components/Navigation';
import { inter, lato, poppins } from '../_Utils/fonts';

import Image from 'next/image';
import Link from 'next/link';

import creator from '../_Assets/contact us-bro.png';
import emailIcon from '../_Assets/email.png';
import telo from '../_Assets/mobile.png';
import facebook from '../_Assets/facebook.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  consent: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    package: '',
    consent: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
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
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header />

      <div className="flex flex-col items-center space-y-4 m-8 sm:m-4 md:m-6 lg:m-8 xl:m-10">
        <h3 className="text-3xl font-bold text-center">Tedd meg első lépésed a siker felé!</h3>
        <p className="text-center">Csupán add meg adataidat, hogy felvehessük veled a kapcsolatot!</p>
        <form onSubmit={handleSubmit} className="bg-cyellow bg-opacity-20 rounded-xl w-full sm:w-3/4 md:w-2/4 lg:w-1/3 flex flex-col items-center justify-center p-8 space-y-6">
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
          <div className="relative w-full">
            <select
              name="package"
              value={formData.package}
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
          <div className="w-full flex items-center space-x-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label className="italic">Hozzájárulok a megadott adataim kapcsolatfelvétel céljából történő kezeléséhez.</label>
          </div>
          <button type="submit" className="bg-cyellow w-2/4 p-2 text-white rounded-full">
            Küldés
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col md:flex-row bg-cyellow bg-opacity-20">
        <div className="w-full md:w-1/2 flex">
          <Image src={creator} alt="logo" className="w-full h-full object-contain" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col border-l-2 border-l-cyellow pl-3">
          <div className="p-4 flex flex-col">
            <h3 className="font-bold text-xl">N&M Web Kapcsolat</h3>
            <div className="flex items-center mt-2 mb-2">
              <Image src={emailIcon} alt="email logo" className="w-6 h-6 mr-2" />
              <p>email@email.com</p>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <Image src={telo} alt="phone logo" className="w-6 h-6 mr-2" />
              <p>+36704228587</p>
            </div>
            <div className="flex items-center mt-2 mb-2">
              <Image src={facebook} alt="facebook logo" className="w-6 h-6 mr-2" />
              <p>facebook</p>
            </div>
          </div>
          <div className="mb-3 p-2">
            <h3 className="font-bold text-xl ml-3 mb-2">Hagyj nekünk üzenetet!</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Név"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail cím"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefonszám"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 placeholder-gray-500 rounded-full mt-1 mb-1"
              />
              <div className="w-full flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <label className="italic">Hozzájárulok a megadott adataim kapcsolatfelvétel céljából történő kezeléséhez.</label>
              </div>
              <button type="submit" className="bg-cyellow w-2/4 p-2 text-white rounded-full">
                Küldés
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
