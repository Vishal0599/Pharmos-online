const features = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <path d="M16 2L4 7v9c0 7 5 13 12 16 7-3 12-9 12-16V7L16 2z" fill="#0A6E9C" opacity="0.2" stroke="#0A6E9C" strokeWidth="1.5" />
        <path d="M10 16l4 4 8-8" stroke="#0A6E9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Safe & Secure",
    subtitle: "Medicines",
    bg: "bg-blue-50",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" fill="#F9A825" opacity="0.2" stroke="#F9A825" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" fill="#F9A825" opacity="0.5" />
        <path d="M16 8v2M16 22v2M8 16H6M26 16h-2" stroke="#F9A825" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.34 10.34l1.42 1.42M20.24 20.24l1.42 1.42M10.34 21.66l1.42-1.42M20.24 11.76l1.42-1.42" stroke="#F9A825" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Genuine",
    subtitle: "Products",
    bg: "bg-orange-50",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="16" cy="28" r="5" fill="#4CAF50" opacity="0.2" />
        <circle cx="16" cy="28" r="3" fill="#4CAF50" opacity="0.4" />
        <path d="M16 6 Q24 10 24 16 L16 22 L8 16 Q8 10 16 6Z" fill="#4CAF50" opacity="0.3" stroke="#4CAF50" strokeWidth="1.5" />
        <path d="M16 18 L16 26" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 24 Q16 26 20 24" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "Fast",
    subtitle: "Delivery",
    bg: "bg-green-50",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
        <circle cx="12" cy="10" r="5" fill="#E91E63" opacity="0.2" stroke="#E91E63" strokeWidth="1.5" />
        <path d="M4 26c0-4.418 3.582-8 8-8" stroke="#E91E63" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 18l2 2 4-4" stroke="#0A6E9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="20" r="7" fill="none" stroke="#0A6E9C" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    title: "Trusted",
    subtitle: "Care",
    bg: "bg-pink-50",
  },
];

export default function WhyChoosePharmos() {
  return (
    <section className="px-4 mt-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="grid grid-cols-4 gap-2">
          {features.map((f) => (
            <div key={f.title} className={`${f.bg} rounded-xl p-2.5 flex flex-col items-center gap-1.5`}>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                {f.icon}
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-bold text-[10px] leading-tight">{f.title}</p>
                <p className="text-gray-500 text-[9px] leading-tight">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
