import { useState } from "react";
import { X, Stethoscope, Pill, Apple, Activity } from "lucide-react";
import { openWhatsApp } from "../config";

const doctorSpecialties = [
  { name: "Cardiologist", emoji: "❤️" },
  { name: "Gynecologist", emoji: "👩‍⚕️" },
  { name: "Pediatrician", emoji: "👶" },
  { name: "General Physician", emoji: "🩺" },
  { name: "Orthopedic", emoji: "🦴" },
  { name: "Ophthalmologist", emoji: "👁️" },
  { name: "Dentist", emoji: "🦷" },
];

const services = [
  {
    id: "doctor",
    label: "Doctor\nConsultation",
    icon: Stethoscope,
    iconColor: "#0A6E9C",
    tileBg: "bg-[#E8F5FF]",
    tileAccent: "#C2E2F7",
  },
  {
    id: "pharmacist",
    label: "Pharmacist /\nMedication Expert",
    icon: Pill,
    iconColor: "#00838F",
    tileBg: "bg-[#E0F7FA]",
    tileAccent: "#B2EBF2",
  },
  {
    id: "nutritionist",
    label: "Nutritionist",
    icon: Apple,
    iconColor: "#2E7D32",
    tileBg: "bg-[#E8F5E9]",
    tileAccent: "#C8E6C9",
  },
  {
    id: "physio",
    label: "Physio\nTherapy",
    icon: Activity,
    iconColor: "#E65100",
    tileBg: "bg-[#FFF3E0]",
    tileAccent: "#FFE0B2",
  },
];

function WABtn({ onClick }: { onClick: () => void }) {
  return null; (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#1fb855] active:scale-90 transition-all shadow-sm flex-shrink-0"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /> 
      </svg>
    </button>
  );
}

export default function ConsultationServices() {
  const [showDoctorModal, setShowDoctorModal] = useState(false);

  const handleServiceClick = (id: string, label: string) => {
    if (id === "doctor") {
      setShowDoctorModal(true);
    } else {
      openWhatsApp(`Hello Pharmos, I want to book ${label.replace("\n", " ")}.`);
    }
  };

  return (
    <section className="px-4 mt-6">
      <div className="flex items-center mb-3">
        <div className="w-1 h-6 bg-[#F9A825] rounded-full mr-2" />
        <h2 className="text-gray-900 font-bold text-lg">Consultation Services</h2>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {services.map((svc) => {
          const Icon = svc.icon;
          return  (
            <button
              key={svc.id}
              onClick={() => handleServiceClick(svc.id, svc.label)}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex flex-col items-center gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all active:scale-95"
            >
              {/* Icon tile */}
              <div className={`w-full aspect-square rounded-xl ${svc.tileBg} flex flex-col items-center justify-center gap-1.5 relative overflow-hidden`}>
                {/* Decorative circle */}
                <div
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full opacity-30 translate-x-3 translate-y-3"
                  style={{ backgroundColor: svc.tileAccent }}
                />
                <div
                  className="absolute top-0 left-0 w-6 h-6 rounded-full opacity-20 -translate-x-2 -translate-y-2"
                  style={{ backgroundColor: svc.tileAccent }}
                />
                <Icon size={32} color={svc.iconColor} strokeWidth={1.6} />
              </div>

              {/* Label */}
              <span className="text-gray-800 text-[10px] font-bold text-center leading-tight whitespace-pre-line">
                {svc.label}
              </span>

              {/* WhatsApp button */}
              <WABtn onClick={() => handleServiceClick(svc.id, svc.label)} />
           </button>
          );
        })}
      </div>

      {/* Doctor Specialties Modal */}
      {showDoctorModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowDoctorModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-md px-5 py-6 shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-gray-900">Doctor Consultation</h3>
              <button onClick={() => setShowDoctorModal(false)} className="p-1 rounded-full hover:bg-gray-100">
                <X size={20} className="text-gray-600" />
              </button>
            </div>
          <p className="text-gray-500 text-sm mb-4">Select a specialist to book an appointment </p>
            <div className="space-y-2">
              {doctorSpecialties.map((doc) => (
              <button
                   key={doc.name}
                  onClick={() => {
                    setShowDoctorModal(false);
          openWhatsApp(`Hello Pharmos, I want to book a ${doc.name} consultation.`);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-[#0A6E9C] hover:text-white group transition-colors"
                >
                  <span className="text-2xl">{doc.emoji}</span>
                  <span className="font-semibold text-gray-800 group-hover:text-white flex-1 text-left">{doc.name}</span>
                 
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
