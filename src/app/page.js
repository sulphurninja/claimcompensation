// pages/index.jsx
'use client'

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FormForm from "./components/FormForm";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lawsuits from "./components/Lawsuits";
import LegalConsultation from "./components/LegalConsultation";
import Services from "./components/Services";



export default function Home() {
  return (
    <div className="w-full ">
      <Header />
      <Hero />
      <div className="w-full flex justify-center">
        <Services />
      </div>
      <div className="mx-4  lawsuit">
        {/* <h1 className="text-center">Lawsuits</h1> */}
        <Lawsuits />
      </div>
      <FAQ />
      <LegalConsultation />

      <FormForm />

      <Footer />
    </div>
  );
}
