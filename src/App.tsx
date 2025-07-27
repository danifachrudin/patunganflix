import React from "react";

interface HeroProps {
  isVisible: Record<string, boolean>;
}

const Hero: React.FC<HeroProps> = ({ isVisible }) => {
  return (
    <section
      id="hero"
      data-animate
      className={`py-32 transition-all duration-1000 ${
        isVisible.hero
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Patungan Netflix Premium
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Nonton hemat bareng teman – mulai dari Rp21.500/orang!
        </p>
      </div>
    </section>
  );
};

export default Hero;
