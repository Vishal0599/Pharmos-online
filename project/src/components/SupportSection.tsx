import { openWhatsApp } from "../config";

export default function SupportSection() {
  return (
    <section className="px-4 mt-4 mb-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <circle cx="20" cy="20" r="16" fill="#0A6E9C" opacity="0.1" />
              <circle cx="20" cy="14" r="6" fill="none" stroke="#0A6E9C" strokeWidth="2" />
              <path d="M14 14 Q14 8 20 8 Q26 8 26 14" fill="none" stroke="#0A6E9C" strokeWidth="2" />
              <path d="M14 14 Q12 14 12 16 Q12 20 14 20" fill="none" stroke="#0A6E9C" strokeWidth="2" />
              <path d="M26 14 Q28 14 28 16 Q28 20 26 20" fill="none" stroke="#0A6E9C" strokeWidth="2" />
              <path d="M16 26 Q18 28 22 28 Q26 28 28 26" fill="none" stroke="#0A6E9C" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="20" cy="32" rx="8" ry="3" fill="#0A6E9C" opacity="0.2" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">Need Help?</h3>
            <p className="text-gray-500 text-xs">We are here to help you</p>
          </div>
        </div>

        <button
          onClick={() => openWhatsApp("Hello Pharmos, I need support.")}
          className="flex-shrink-0 bg-[#0A6E9C] text-white text-xs font-bold px-3 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#085d85] transition-colors shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with Support
        </button>
      </div>
<a
  href="https://www.google.com/maps/search/?api=1&query=PHARMOS+Iris+Park+Talawali+Chanda+Indore+Madhya+Pradesh+453771"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 bg-blue-50 rounded-xl p-3 flex items-center justify-between hover:bg-blue-100 transition-colors active:scale-[0.98]"
>
  {/* Left Side */}
  <div className="flex items-start gap-2 flex-1 pr-3">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0A6E9C"
      strokeWidth="2"
      className="w-5 h-5 flex-shrink-0 mt-1"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>

    <div>
      <p className="text-[#0A6E9C] font-bold text-s">
        Our Store
      </p>

      <p className="text-gray-700 text-xs leading-relaxed mt-1">
        PHARMOS, Iris Park, Talawali Chanda, Indore,
        Madhya Pradesh 453771
      </p>
    </div>
  </div>

 {/* Right Side Image */}
<img src ="/locationphoto.png" 
  alt="Pharmos Location"
  className="w-44 h-20 rounded-l object-cover border border-blue-100 shadow-md flex-shrink-0"
/>
</a>
</section>
  );
}