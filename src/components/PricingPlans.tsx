import React from "react";
import { Check } from "lucide-react";

const NETFLIX_PREMIUM_PRICE = 186000;

const pricingPlans = [
  {
    people: "5 Orang",
    hargaFinalPerOrang: 39500,
    popular: false,
    features: [
      "Netflix Premium 4K",
      "4 Layar Bersamaan",
      "Download Unlimited",
      "Grup WhatsApp Support",
      "Admin Fee Included",
    ],
  },
  {
    people: "7 Orang",
    hargaFinalPerOrang: 29500,
    popular: true,
    features: [
      "Netflix Premium 4K",
      "4 Layar Bersamaan",
      "Download Unlimited",
      "Grup WhatsApp Support",
      "Admin Fee Included",
      "Priority Support",
    ],
  },
  {
    people: "10 Orang",
    hargaFinalPerOrang: 21500,
    popular: false,
    features: [
      "Netflix Premium 4K",
      "4 Layar Bersamaan",
      "Download Unlimited",
      "Grup WhatsApp Support",
      "Admin Fee Included",
      "Backup Account",
    ],
  },
];

const formatRupiah = (angka: number) => {
  return angka.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

interface VisibilityProps {
  isVisible: Record<string, boolean>;
  openModalWithPlan: (plan: any) => void;
}

const PricingPlans: React.FC<VisibilityProps> = ({
  isVisible,
  openModalWithPlan,
}) => {
  return (
    <section
      id="pricing"
      data-animate
      className={`py-20 bg-black transition-all duration-1000 delay-400 ${
        isVisible.pricing
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-red-500">Paket Harga</span>{" "}
            <span className="text-white">Terjangkau</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan kamu. Semua harga sudah
            termasuk admin fee!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const totalBiayaGrup =
              plan.hargaFinalPerOrang * parseInt(plan.people.split(" ")[0]);
            const hematUntukUser =
              NETFLIX_PREMIUM_PRICE - plan.hargaFinalPerOrang;

            return (
              <div
                key={index}
                className={`relative bg-gray-900/50 p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-red-500 shadow-red-500/20 shadow-2xl"
                    : "border-gray-700 hover:border-red-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {plan.people}
                  </h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-red-500">
                      {formatRupiah(plan.hargaFinalPerOrang)}
                    </span>
                    <span className="text-gray-400">/bulan/orang</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="line-through">
                      {formatRupiah(NETFLIX_PREMIUM_PRICE)}
                    </span>
                    <span className="text-green-500 ml-2">
                      Hemat {formatRupiah(hematUntukUser)}!
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModalWithPlan(plan)}
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-700 hover:bg-red-600 text-white"
                  }`}
                >
                  Pilih Paket Ini
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
