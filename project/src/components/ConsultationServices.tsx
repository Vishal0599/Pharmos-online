import { useState } from "react";
import { X, Stethoscope, Pill, Apple, ActivityIcon } from "lucide-react";
import { openWhatsApp } from "../config";


import {
  doctorSpecialties,
  pharmacists,
  nutritionists,
  physiotherapists,
} from "../data/consultants";
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
    label: "physiotherapy",
    icon: ActivityIcon,
    iconColor: "#E65100",
    tileBg: "bg-[#FFF3E0]",
    tileAccent: "#FFE0B2",
  },
];

function WABtn({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm hover:bg-[#1fb855] transition-all"
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-4 h-4"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
      </svg>
    </button>
  );
}
interface ConsultationServicesProps {
  showDoctorModal: boolean;
  setShowDoctorModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConsultationServices({
  showDoctorModal,
  setShowDoctorModal,
}: ConsultationServicesProps) {
  
  const [showPharmacistModal, setShowPharmacistModal] = useState(false);
  const [showNutritionModal, setShowNutritionModal] = useState(false);
  const [showPhysioModal, setShowPhysioModal] = useState(false);

  const [selectedSpecialty, setSelectedSpecialty] = useState<any>(null);

  const handleServiceClick = (id: string, label: string) => {
    switch (id) {
      case "doctor":
        setShowDoctorModal(true);
        break;

      case "pharmacist":
        setShowPharmacistModal(true);
        break;

      case "nutritionist":
        setShowNutritionModal(true);
        break;

      case "physio":
        setShowPhysioModal(true);
        break;

      default:
        openWhatsApp(
          `Hello Pharmos, I want ${label.replace("\n", " ")} consultation.`
        );
    }
  };

  return (
    <section className="px-4 mt-6">

      {/* Heading */}

      <div className="flex items-center mb-4">
        <div className="w-1 h-6 bg-[#F9A825] rounded-full mr-2"></div>

        <h2 className="text-lg font-bold">
          Consultation Services
        </h2>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-4 gap-2">

        {services.map((svc) => {

          const Icon = svc.icon;

          return (

            <button
              key={svc.id}
              onClick={() => handleServiceClick(svc.id, svc.label)}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 flex flex-col items-center gap-2 hover:shadow-md transition-all active:scale-95"
            >

              {/* Icon */}

              <div
                className={`w-full aspect-square rounded-xl ${svc.tileBg} flex items-center justify-center relative overflow-hidden`}
              >

                <div
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full opacity-30 translate-x-3 translate-y-3"
                  style={{
                    backgroundColor: svc.tileAccent,
                  }}
                />

                <Icon
                  size={30}
                  color={svc.iconColor}
                  strokeWidth={1.7}
                />

              </div>

              {/* Label */}

              <span className="text-[10px] text-center font-bold whitespace-pre-line leading-tight">
                {svc.label}
              </span>
</button>

          );

        })}

      </div>
            {/* ================= Doctor Modal ================= */}

      {showDoctorModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setShowDoctorModal(false);
            setSelectedSpecialty(null);
          }}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">

              <h3 className="text-xl font-bold">
                {selectedSpecialty
                  ? selectedSpecialty.name
                  : "Doctor Consultation"}
              </h3>

              <button
                onClick={() => {
                  if (selectedSpecialty) {
                    setSelectedSpecialty(null);
                  } else {
                    setShowDoctorModal(false);
                  }
                }}
              >
                <X />
              </button>

            </div>

            {!selectedSpecialty && (

              <div className="space-y-3">

                {doctorSpecialties.map((item) => (

                  <button
                    key={item.name}
                    onClick={() => setSelectedSpecialty(item)}
                    className="w-full rounded-xl bg-blue-50 hover:bg-[#0A6E9C] hover:text-white transition-all p-4 flex items-center gap-3"
                  >

                    <span className="text-2xl">
                      {item.emoji}
                    </span>

                    <span className="font-semibold">
                      {item.name}
                    </span>

                  </button>

                ))}

              </div>

            )}

            {selectedSpecialty && (

              <div className="space-y-4">

                {selectedSpecialty.doctors.length === 0 && (

                  <div className="text-center py-10 text-gray-500">

                    Doctor will be available soon.

                  </div>

                )}

                {selectedSpecialty.doctors.map((doctor: any) => (

                  <div
                    key={doctor.name}
                    className="border rounded-2xl p-4 shadow-sm"
                  >

                    <h2 className="text-lg font-bold text-[#0A6E9C]">
                      {doctor.name}
                    </h2>

                    <p className="text-sm mt-2">
                      🎓 {doctor.qualification}
                    </p>

                    <p className="text-sm text-blue-600 font-medium">
                      🏥 {doctor.specialization}
                    </p>

                    <p className="text-sm">
                      🩺 Experience : {doctor.experience}
                    </p>

                    <p className="text-sm font-semibold text-green-700">
                      💰 Consultation Fee : {doctor.fees}
                    </p>

                    <button
                      onClick={() =>
                        openWhatsApp(
                          `Hello Pharmos, I want to book an appointment with ${doctor.name}.`
                        )
                      }
                      className="w-full mt-4 bg-[#0A6E9C] text-white py-3 rounded-xl font-bold hover:bg-[#085d85]"
                    >
                      Book Appointment
                    </button>

                  </div>

                ))}

              </div>

            )}

          </div>
        </div>
      )}
            {/* ================= Pharmacist Modal ================= */}

      {showPharmacistModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowPharmacistModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold">
                Pharmacist Consultation
              </h3>

              <button onClick={() => setShowPharmacistModal(false)}>
                <X />
              </button>
            </div>

            {pharmacists.map((doctor) => (
              <div
                key={doctor.name}
                className="border rounded-2xl p-4 shadow-sm"
              >
                <h2 className="text-lg font-bold text-[#0A6E9C]">
                  {doctor.name}
                </h2>

                <p className="text-sm mt-2">
                  🎓 {doctor.qualification}
                </p>

                <p className="text-sm text-blue-600">
                  💊 {doctor.specialization}
                </p>

                <p className="text-sm">
                  🩺 Experience : {doctor.experience}
                </p>

                <p className="text-sm font-semibold text-green-700">
                  💰 Consultation Fee : {doctor.fees}
                </p>

                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Pharmos, I want Medication Consultation with ${doctor.name}.`
                    )
                  }
                  className="w-full mt-4 bg-[#0A6E9C] text-white py-3 rounded-xl font-bold"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= Nutrition Modal ================= */}

      {showNutritionModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowNutritionModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold">
                Nutrition Consultation
              </h3>

              <button onClick={() => setShowNutritionModal(false)}>
                <X />
              </button>
            </div>

            {nutritionists.map((doctor) => (
              <div
                key={doctor.name}
                className="border rounded-2xl p-4 shadow-sm"
              >
                <h2 className="text-lg font-bold text-[#2E7D32]">
                  {doctor.name}
                </h2>

                <p className="text-sm mt-2">
                  🎓 {doctor.qualification}
                </p>

                <p className="text-sm text-green-700">
                  🥗 {doctor.specialization}
                </p>

                <p className="text-sm">
                  🩺 Experience : {doctor.experience}
                </p>

                <p className="text-sm font-semibold text-green-700">
                  💰 Consultation Fee : {doctor.fees}
                </p>

                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Pharmos, I want Nutrition Consultation with ${doctor.name}.`
                    )
                  }
                  className="w-full mt-4 bg-[#2E7D32] text-white py-3 rounded-xl font-bold"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= Physio Modal ================= */}

      {showPhysioModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowPhysioModal(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold">
                Physiotherapy Consultation
              </h3>

              <button onClick={() => setShowPhysioModal(false)}>
                <X />
              </button>
            </div>

            {physiotherapists.map((doctor) => (
              <div
                key={doctor.name}
                className="border rounded-2xl p-4 shadow-sm"
              >
                <h2 className="text-lg font-bold text-orange-600">
                  {doctor.name}
                </h2>

                <p className="text-sm mt-2">
                  🎓 {doctor.qualification}
                </p>

                <p className="text-sm text-orange-600">
                  🦴 {doctor.specialization}
                </p>

                <p className="text-sm">
                  🩺 Experience : {doctor.experience}
                </p>

                <p className="text-sm font-semibold text-green-700">
                  💰 Consultation Fee : {doctor.fees}
                </p>

                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Pharmos, I want Physiotherapy Consultation with ${doctor.name}.`
                    )
                  }
                  className="w-full mt-4 bg-orange-600 text-white py-3 rounded-xl font-bold"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}