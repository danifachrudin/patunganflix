import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  MessageCircle,
  Users,
  Check,
  Shield,
  Star,
  CreditCard,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Heart,
  Clock,
  PlayCircle,
  Instagram,
  Facebook,
  Twitter,
  X
} from 'lucide-react';

// Constants
const NETFLIX_PREMIUM_PRICE = 186000;
const ADMIN_FEE = 5000;

// Pricing Plans Data
const pricingPlans = [
  {
    people: "5 Orang",
    hargaFinalPerOrang: 42000,
    features: [
      "Netflix Premium 4K",
      "5 Profile Pengguna",
      "Download Unlimited",
      "Support 24/7",
      "Grup WhatsApp"
    ],
    popular: false
  },
  {
    people: "7 Orang", 
    hargaFinalPerOrang: 32000,
    features: [
      "Netflix Premium 4K",
      "7 Profile Pengguna", 
      "Download Unlimited",
      "Support Priority",
      "Grup WhatsApp",
      "Bonus 1 Bulan"
    ],
    popular: true
  },
  {
    people: "10 Orang",
    hargaFinalPerOrang: 21000,
    features: [
      "Netflix Premium 4K",
      "10 Profile Pengguna",
      "Download Unlimited", 
      "Support VIP",
      "Grup WhatsApp",
      "Bonus 2 Bulan"
    ],
    popular: false
  }
];

// Netflix Groups Data
const netflixGroups = [
  {
    id: 1,
    members: ["Admin", "Sarah M.", "Budi K.", "Rina S."],
    maxMembers: 5,
    isFull: false
  },
  {
    id: 2,
    members: ["Admin", "Dika P.", "Maya L.", "Andi R.", "Sari W.", "Tono H.", "Lisa A."],
    maxMembers: 7,
    isFull: true
  },
  {
    id: 3,
    members: ["Admin", "Reza F.", "Nina K.", "Bayu S.", "Desi M.", "Eko P."],
    maxMembers: 7,
    isFull: false
  },
  {
    id: 4,
    members: ["Admin", "Fitri N.", "Agus T.", "Lina D.", "Hendra W.", "Sinta R.", "Yoga B.", "Dewi K.", "Rama S."],
    maxMembers: 10,
    isFull: false
  },
  {
    id: 5,
    members: ["Admin", "Indra L.", "Putri A.", "Fajar M.", "Lia S.", "Doni K.", "Mega P.", "Rizki H.", "Tari W.", "Bima R."],
    maxMembers: 10,
    isFull: true
  }
];

// FAQ Data
const faqData = [
  {
    question: "Apakah akun Netflix ini legal dan aman?",
    answer: "Ya, 100% legal! Kami menggunakan sistem family sharing resmi Netflix. Setiap akun dibuat sesuai terms of service Netflix dan tidak melanggar aturan apapun. Data pribadi Anda dijamin aman."
  },
  {
    question: "Bagaimana sistem pembagian jadwal nonton?",
    answer: "Tidak ada pembatasan jadwal! Netflix Premium mendukung multiple streaming bersamaan. Dengan paket keluarga, bisa hingga 4 orang nonton bersamaan tanpa gangguan. Setiap member dapat membuat profile sendiri."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BRI, BNI), E-wallet (OVO, GoPay, DANA, ShopeePay), Virtual Account, dan QRIS. Pembayaran otomatis diperpanjang setiap bulan."
  },
  {
    question: "Apa yang terjadi jika ada member yang keluar?",
    answer: "Sistem kami otomatis mencarikan pengganti dalam 24 jam. Selama proses pencarian, akun tetap berjalan normal. Jika Anda yang ingin keluar, cukup informasikan 3 hari sebelum tanggal perpanjangan."
  },
  {
    question: "Bisakah saya ganti paket di tengah periode langganan?",
    answer: "Ya, bisa! Upgrade paket bisa dilakukan kapan saja dengan membayar selisih harga. Untuk downgrade, akan berlaku di periode berikutnya. Tim support akan membantu proses perpindahan paket."
  },
  {
    question: "Bagaimana jika Netflix tiba-tiba bermasalah?",
    answer: "Kami memiliki backup plan dan monitor 24/7. Jika ada masalah teknis, akan langsung ditangani dalam 1-2 jam. Jika downtime lebih dari 24 jam, kami berikan kompensasi perpanjangan gratis."
  }
];

function App() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    'how-it-works': false,
    pricing: false,
    groups: false,
    faq: false,
    cta: false
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const groupsContainerRef = useRef<HTMLDivElement>(null);
  const groupSectionRef = useRef<HTMLDivElement>(null);

  // Format currency
  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('IDR', 'Rp');
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // FAQ toggle
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Modal functions
  const openModalWithPlan = (plan: any) => {
    setSelectedPlan(plan);
    setShowPricingModal(true);
  };

  const closeModal = () => {
    setShowPricingModal(false);
    setSelectedPlan(null);
  };

  // Scroll to groups section
  const scrollToGroupSection = () => {
    groupSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Groups scrolling
  const scrollGroups = (direction: 'left' | 'right') => {
    const container = groupsContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      
      setTimeout(() => {
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
      }, 300);
    }
  };

  // Check scroll arrows on mount
  useEffect(() => {
    const container = groupsContainerRef.current;
    if (container) {
      const checkArrows = () => {
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
      };
      
      checkArrows();
      container.addEventListener('scroll', checkArrows);
      return () => container.removeEventListener('scroll', checkArrows);
    }
  }, []);

  return (
    <div className="font-poppins bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="text-xl font-bold text-white">PatunganFlix</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                Cara Kerja
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Paket
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
              <button 
                onClick={() => openModalWithPlan(pricingPlans.find(p => p.people === "7 Orang"))}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        data-animate
        className={`min-h-screen pt-24 flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${
          isVisible.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Netflix Sharing</span>
              <br />
              <span className="text-red-500">mulai dari</span>
              <br />
              <span className="text-red-400 text-5xl sm:text-6xl lg:text-7xl">
                21rb/bulan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nonton Netflix Premium legal dan hemat bareng teman!
              <span className="text-red-400 font-semibold">
                {" "}
                Kualitas 4K, tanpa iklan, akses semua konten.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() =>
                openModalWithPlan(
                  pricingPlans.find((p) => p.people === "7 Orang")
                )
              }
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Gabung Sekarang</span>
            </button>
            <button
              onClick={scrollToGroupSection}
              className="border-2 border-gray-600 hover:border-red-500 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-red-500/10"
            >
              <Users className="h-6 w-6" />
              <span>Lihat Grup</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2 mb-2">
              <Check className="h-5 w-5 text-green-500" />
              <span>100% Legal</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <span>Aman & Terpercaya</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>1000+ Member Aktif</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-red-500">Cara Kerja</span>{" "}
              <span className="text-white">Super Mudah</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hanya 3 langkah sederhana untuk mulai nonton Netflix Premium
              dengan harga terjangkau
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((step, index) => (
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

      {/* Pricing Plans */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
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
                      <span className="text-4xl sm:text-5xl font-bold text-red-500">
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
                    {plan.features.map((feature, idx) => (
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

      {/* Groups Section */}
      <section
        id="groups"
        ref={groupSectionRef}
        data-animate
        className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 delay-500 ${
          isVisible.groups
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Grup Netflix </span>
              <span className="text-red-500">Tersedia</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Pilih grup yang cocok dan langsung bergabung
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            {showLeftArrow && (
              <button
                onClick={() => scrollGroups("left")}
                className="absolute left-0 z-10 p-2 bg-gray-700/70 hover:bg-red-600 text-white rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Gulir ke kiri"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            <div
              ref={groupsContainerRef}
              className="flex overflow-x-hidden space-x-6 py-4 px-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {netflixGroups.map((grup) => (
                <div
                  key={grup.id}
                  className={`min-w-[280px] md:min-w-[320px] bg-gray-800 border-2 border-gray-700 p-6 rounded-2xl text-left shadow-lg flex-shrink-0 ${
                    grup.isFull
                      ? "opacity-70 border-gray-600"
                      : "hover:border-red-600"
                  }`}
                >
                  <p className="text-red-500 font-bold text-sm mb-1">NETFLIX</p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Group {grup.id}
                  </h3>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    {grup.members.map((member, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span>
                          {idx + 1}. {member}
                        </span>
                      </li>
                    ))}
                    {Array(grup.maxMembers - grup.members.length)
                      .fill(null)
                      .map((_, idx) => (
                        <li
                          key={`empty-${grup.id}-${idx}`}
                          className="text-gray-500"
                        >
                          {grup.members.length + idx + 1}. {"----------"}
                        </li>
                      ))}
                  </ul>
                  <a
                    href="https://wa.me/6283157121201"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      grup.isFull
                        ? "bg-red-800/50 text-white/50 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700 transform hover:scale-105"
                    }`}
                    {...(grup.isFull && { onClick: (e) => e.preventDefault() })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {grup.isFull ? "Full" : "Gabung Grup"}
                  </a>
                </div>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scrollGroups("right")}
                className="absolute right-0 z-10 p-2 bg-gray-700/70 hover:bg-red-600 text-white rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Gulir ke kanan"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        data-animate
        className={`py-20 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 delay-600 ${
          isVisible.faq
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-red-500">FAQ</span>{" "}
              <span className="text-white">Pertanyaan Umum</span>
            </h2>
            <p className="text-xl text-gray-400">
              Masih ada pertanyaan? Berikut jawaban untuk pertanyaan yang sering
              ditanyakan
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-red-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        data-animate
        className={`py-20 bg-gradient-to-r from-red-900/20 via-red-600/10 to-red-900/20 transition-all duration-1000 delay-800 ${
          isVisible.cta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Siap Mulai</span>{" "}
            <span className="text-red-500">Streaming?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan member yang sudah merasakan Netflix Premium
            dengan harga terjangkau. Jangan sampai ketinggalan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                openModalWithPlan(
                  pricingPlans.find((p) => p.people === "7 Orang")
                )
              }
              className="bg-red-600 hover:bg-red-700 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>
                Gabung Sekarang - Mulai dari {formatRupiah(21000)}!
              </span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span>1000+ Member Puas</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Aktif 5 Menit</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span>100% Aman</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <PlayCircle className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-bold text-white">
                  PatunganFlix
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Platform terpercaya untuk patungan akun Netflix Premium. Nonton
                legal, hemat, dan aman bersama ribuan member aktif.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/yourprofile"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/yourprofile"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Netflix Sharing
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Paket Premium
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://wa.me/6283157121201"
                    className="hover:text-white transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Admin</span>
                  </a>
                </li>
                <li>Email: admin@patunganflix.com</li>
                <li>Jam Operasional: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 PatunganFlix. Semua hak dilindungi. Netflix adalah
              merek dagang dari Netflix, Inc.
            </p>
          </div>
        </div>
      </footer>

      {/* Pricing Details Modal */}
      {showPricingModal && selectedPlan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
              aria-label="Tutup"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6 text-center">
              Rincian Paket {selectedPlan.people}
            </h2>

            <div className="space-y-4 text-base sm:text-lg">
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-300">Harga Netflix Premium:</span>
                <span className="text-white font-semibold">
                  {formatRupiah(NETFLIX_PREMIUM_PRICE)}/bulan
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-300">Jumlah Orang:</span>
                <span className="text-white font-semibold">
                  {selectedPlan.people}
                </span>
              </div>

              {/* Simulasi Pembayaran */}
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-300">Simulasi Pembayaran:</span>
                <span className="text-white font-semibold text-sm sm:text-base">
                  {formatRupiah(
                    NETFLIX_PREMIUM_PRICE /
                      parseInt(selectedPlan.people.split(" ")[0])
                  )}{" "}
                  x {parseInt(selectedPlan.people.split(" ")[0])} ={" "}
                  {formatRupiah(NETFLIX_PREMIUM_PRICE)}
                </span>
              </div>

              {/* Biaya Admin */}
              <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                <span className="text-gray-300">Biaya Admin:</span>
                <span className="text-white font-semibold">
                  {formatRupiah(ADMIN_FEE)}/orang
                </span>
              </div>

              {/* Harga per Orang (Netflix Only) */}
              {(() => {
                const numPeople = parseInt(selectedPlan.people.split(" ")[0]);
                const netflixPricePerPersonExact =
                  NETFLIX_PREMIUM_PRICE / numPeople;
                const netflixPricePerPersonCharged =
                  selectedPlan.hargaFinalPerOrang - ADMIN_FEE;
                const roundingDifference =
                  netflixPricePerPersonCharged - netflixPricePerPersonExact;

                return (
                  <div className="flex justify-between items-start pb-2 border-b border-gray-700 flex-col sm:flex-row">
                    <span className="text-gray-300 pr-2 mb-2 sm:mb-0">
                      Harga per Orang (Netflix):
                    </span>
                    <div className="text-white font-semibold text-right sm:text-left">
                      {formatRupiah(netflixPricePerPersonCharged)}
                      {roundingDifference !== 0 && (
                        <p className="text-sm text-gray-500">
                          (Pembulatan{" "}
                          {formatRupiah(Math.abs(roundingDifference))} untuk
                          kemudahan pembayaran)
                        </p>
                      )}
                      {roundingDifference === 0 && (
                        <p className="text-sm text-gray-500">
                          (Harga bersih Netflix per orang)
                        </p>
                      )}
                    </div>
                  </div>
                );
              })()}

              {/* Total Pembayaran */}
              <div className="flex justify-between items-center text-lg sm:text-xl font-bold py-2 bg-gray-700 rounded px-4">
                <span className="text-red-400">Total Pembayaran:</span>
                <span className="text-white">
                  {formatRupiah(selectedPlan.hargaFinalPerOrang)}
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/6283157121201?text=Halo%20admin%2C%20saya%20tertarik%20untuk%20bergabung%20dengan%20paket%20Netflix%20Premium%20${
                selectedPlan.people
              }%20dengan%20biaya%20${formatRupiah(
                selectedPlan.hargaFinalPerOrang
              )}%2Fbulan.%20Mohon%20panduannya.`}
              className="mt-6 sm:mt-8 block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lanjutkan ke WhatsApp
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default App;