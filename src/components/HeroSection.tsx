import { useState, useEffect } from "react";
import { openWhatsApp } from "../config";

const slides = [
  {
    title: "Your Health,",
    highlight: "Our Priority",
    icon: "❤️",
    subtitle: "All your healthcare needs in one place.",
    bg: "from-blue-50 to-cyan-50",
  },
  {
    title: "Fast Medicine",
    highlight: "Delivery",
    icon: "🚀",
    subtitle: "Get medicines at your doorstep quickly.",
    bg: "from-orange-50 to-yellow-50",
  },
  {
    title: "Expert Doctors",
    highlight: "On Demand",
    icon: "👨‍⚕️",
    subtitle: "Consult specialists from your home.",
    bg: "from-green-50 to-teal-50",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <div className={`mx-4 mt-3 rounded-2xl bg-gradient-to-br ${slide.bg} overflow-hidden shadow-md transition-all duration-500`}>
      <div className="flex items-stretch min-h-[190px]">
        {/* Text content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-gray-900 font-black text-2xl leading-tight">
              {slide.title}
            </h1>
            <h1 className="text-[#F9A825] font-black text-2xl leading-tight flex items-center gap-2">
              {slide.highlight} <span className="text-xl">{slide.icon}</span>
            </h1>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{slide.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => openWhatsApp("Hello Pharmos, I want to order medicines.")}
              className="bg-[#0A6E9C] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-[#085d85] transition-colors shadow-md"
            >
              <WhatsAppIcon />
              Order Medicines
            </button>
            <button
              onClick={() => openWhatsApp("Hello Pharmos, I want to book a doctor consultation.")}
              className="bg-[#F9A825] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-[#e09520] transition-colors shadow-md"
            >
              Doctor Consultation
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-36 flex items-center justify-center p-3">
          <HealthIllustration />
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[#0A6E9C]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HealthIllustration() {
  return (
    <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Shield */}
      <path d="M60 8L20 24v36c0 22 17 42 40 50 23-8 40-28 40-50V24L60 8z" fill="#0A6E9C" opacity="0.15" stroke="#0A6E9C" strokeWidth="2" />
      <path d="M60 18L28 31v29c0 18 14 34 32 41 18-7 32-23 32-41V31L60 18z" fill="#0A6E9C" opacity="0.25" />
      {/* Cross */}
      <rect x="50" y="40" width="20" height="50" rx="4" fill="white" />
      <rect x="35" y="55" width="50" height="20" rx="4" fill="white" />
      {/* Stethoscope */}
      <circle cx="92" cy="95" r="8" fill="none" stroke="#0A6E9C" strokeWidth="2.5" />
      <path d="M84 95 Q75 95 75 80 Q75 65 90 65 Q105 65 105 75" stroke="#0A6E9C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="18" cy="60" rx="7" ry="12" fill="#4CAF50" opacity="0.7" transform="rotate(-30 18 60)" />
      <ellipse cx="102" cy="55" rx="6" ry="10" fill="#4CAF50" opacity="0.6" transform="rotate(25 102 55)" />
      {/* Pills */}
      <ellipse cx="25" cy="90" rx="7" ry="4" fill="#F9A825" opacity="0.85" />
      <ellipse cx="95" cy="110" rx="7" ry="4" fill="#E91E63" opacity="0.7" transform="rotate(15 95 110)" />
      <circle cx="40" cy="108" r="5" fill="#0A6E9C" opacity="0.5" />
    </svg>
  );
}
