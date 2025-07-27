import React from "react";
import { MessageCircle, CreditCard, Play } from "lucide-react";

interface VisibilityProps {
  isVisible: Record<string, boolean>;
}

const HowItWorks: React.FC<VisibilityProps> = ({ isVisible }) => {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Hubungi Kami",
      description:
        "Chat WhatsApp kami untuk mendaftar. Cukup kasih tau nama dan pilih paket yang diinginkan.",
      color: "text-green-500",
    },
    {
      icon: CreditCard,
      title: "2. Bayar & Konfirmasi",
      description:
        "Transfer sesuai paket yang dipilih. Setelah bayar, kirim bukti transfer ke admin.",
      color: "text-blue-500",
    },
    {
      icon: Play,
      title: "3. Mulai Nonton!",
      description:
        "Dapatkan akses akun Netflix Premium dalam 5 menit. Langsung bisa streaming sepuasnya!",
      color: "text-red-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      data-animate
      className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 delay-200 ${
        isVisible["how-it-works"]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-red-500">Cara Kerja</span>{" "}
            <span className="text-white">Super Mudah</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hanya 3 langkah sederhana untuk mulai nonton Netflix Premium dengan
            harga terjangkau
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gray-700/50 mb-6 ${step.color}`}
                >
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
