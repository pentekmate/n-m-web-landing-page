"use client"
import Link from "next/link";
import { inter, lato, poppins } from "./_Utils/fonts";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css"



import Footer from "./_Components/Footer";
import Navigation from "./_Components/Navigation";
import Header from "./_Components/Header";
import ImporantWebsite from "./_Components/ImportantWebsite";
import WhyChooseUs from "./_Components/WhyChooseUs";
import SpecialOffer from "./_Components/SpecialOffer";
import PackageOffers from "./_Components/PackageOffers";
import Reference from "./_Components/Reference";
import { useEffect, useState } from "react";
import AboutUs from "./_Components/AboutUs";

export default function Home() {
 
  useEffect(()=>{
    AOS.init({})
})

  return (
    <div className="relative w-full">
      <Navigation/>
      <Header></Header> 
      <ImporantWebsite></ImporantWebsite>
      <WhyChooseUs></WhyChooseUs>
      <SpecialOffer></SpecialOffer>
      <PackageOffers></PackageOffers>
      <AboutUs></AboutUs>
 
      <Reference />
      <Footer  />    
    </div>
  );
}
