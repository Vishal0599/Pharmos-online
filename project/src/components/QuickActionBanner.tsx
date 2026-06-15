import { openWhatsApp } from "../config";

export default function QuickActionBanner() {
  return (
    <div
      className="mx-4 mt-2 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center gap-3 px-4 py-3 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => openWhatsApp("Hello Pharmos, I want to order medicines. Please guide me.")}
    >
      {/* Medicine cart illustration */}
      <div className="w-16 h-16 flex-shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect x="8" y="24" width="40" height="26" rx="4" fill="#0A6E9C" opacity="0.15" />
          <rect x="6" y="22" width="44" height="28" rx="4" fill="#0A6E9C" opacity="0.25" />
          {/* Cart body */}
          <path d="M10 16h4l6 22h24l4-16H14" stroke="#0A6E9C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="22" cy="42" r="3" fill="#0A6E9C" />
          <circle cx="36" cy="42" r="3" fill="#0A6E9C" />
          {/* Medicine bottle */}
          <rect x="26" y="6" width="12" height="18" rx="3" fill="#F9A825" />
          <rect x="28" y="4" width="8" height="4" rx="1" fill="#F9A825" opacity="0.7" />
          <rect x="29" y="10" width="6" height="2" rx="1" fill="white" />
          <rect x="31" y="8" width="2" height="6" rx="1" fill="white" />
          {/* Pills */}
          <ellipse cx="16" cy="30" rx="4" ry="2.5" transform="rotate(-30 16 30)" fill="#F9A825" opacity="0.9" />
          <ellipse cx="46" cy="28" rx="4" ry="2.5" transform="rotate(20 46 28)" fill="#25D366" opacity="0.8" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-gray-900 text-base leading-tight">Order Medicines</h3>
        <p className="text-gray-500 text-xs mt-0.5 leading-snug">
          Upload Prescription &amp; Get Medicines Delivered at Your Doorstep
        </p>
      </div>

      <button
        className="flex-shrink-0 bg-[#0A6E9C] text-white text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 hover:bg-[#085d85] transition-colors shadow-md"
        onClick={(e) => {
          e.stopPropagation();
          openWhatsApp("Hello Pharmos, I want to order medicines. Please guide me.");
        }}
      >
        Order Now
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
