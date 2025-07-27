import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PricingPlans from "./components/PricingPlans";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedPlan, setSelectedPlan] = useState<any>(null); // untuk popup/modal

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting && id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const openModalWithPlan = (plan: any) => {
    setSelectedPlan(plan);
    // kamu bisa buka modal di sini jika kamu punya komponen modal
    console.log("Paket dipilih:", plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-poppins">
      <Header />
      <Hero isVisible={isVisible} />
      <HowItWorks isVisible={isVisible} />
      <PricingPlans
        isVisible={isVisible}
        openModalWithPlan={openModalWithPlan}
      />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
