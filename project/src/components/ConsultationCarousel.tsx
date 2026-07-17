import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  CalendarCheck,
  IndianRupee,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import {
  doctorSpecialties,
  pharmacists,
  nutritionists,
  physiotherapists,
} from "../data/consultants";

type Consultant = {
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  fees?: string;
  photo?: string;
  category: string;
};

export default function ConsultationCarousel() {
  const consultants = useMemo(() => {
    const doctors: Consultant[] = [];

    doctorSpecialties.forEach((specialty: any) => {
      specialty.doctors.forEach((doctor: any) => {
        doctors.push({
          ...doctor,
          category: specialty.name,
        });
      });
    });

    const list: Consultant[] = [];

    // Doctor 1
    if (doctors[0]) list.push(doctors[0]);

    // Nutritionist
    nutritionists.forEach((person: any) =>
      list.push({
        ...person,
        category: "Nutritionist",
      })
    );

    // Doctor 2
    if (doctors[1]) list.push(doctors[1]);

    // Pharmacist
    pharmacists.forEach((person: any) =>
      list.push({
        ...person,
        category: "Medication Expert",
      })
    );

    // बाकी Doctors
    for (let i = 2; i < doctors.length; i++) {
      list.push(doctors[i]);
    }

    // Physiotherapists (अगर हों)
    physiotherapists.forEach((person: any) =>
      list.push({
        ...person,
        category: "Physiotherapist",
      })
    );

    return list;
  }, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (consultants.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % consultants.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [consultants.length]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + consultants.length) % consultants.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % consultants.length);
  };

  if (consultants.length === 0) {
    return (
      <section className="px-4 mt-6">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-[#0A6E9C] rounded-full mr-2"></div>
          <h2 className="text-lg font-bold text-gray-900">Our Doctors and Experts</h2>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow border">
          No consultants available.
        </div>
      </section>
    );
  }

  const consultant = consultants[current];

  return (
    <section className="px-4 mt-4">
      {/* Section header — same style as "Consultation Services" / "Home Services" */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center min-w-0">
          <div className="w-1 h-6 bg-[#0A6E9C] rounded-full mr-2 shrink-0"></div>
          <h2 className="text-lg font-bold text-gray-900 truncate">
            Our Doctors and Experts
          </h2>
        </div>

        {consultants.length > 1 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Card container */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 px-3 py-3 sm:px-6 sm:py-5">
        {/* Available badge */}
        <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
          Available
        </span>

        {/* Card — compact row layout even on mobile to keep height small */}
        <div className="flex flex-row items-center gap-3 sm:gap-6">
          {/* Photo — smaller on mobile */}
          <div className="sticky w-16 h-16 sm:w-36 sm:h-36 shrink-0">
            {consultant.photo ? (
              <img
                src={consultant.photo}
                alt={consultant.name}
                className="w-20 h-20 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl object-cover"
              />
            ) : (
              <div className="w-14 h-14 sm:w-32 sm:h-36 rounded-xl sm:rounded-2xl bg-[#E8F0FB] flex items-center justify-center">
                <User className="h-6 w-6 sm:h-10 sm:w-10 text-[#0A6E9C]/30" />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3">
                <h3 className="text-sm sm:text-2xl font-bold text-gray-900 leading-tight truncate">
                  {consultant.name}
                </h3>
                <span className="self-start shrink-0 bg-[#0A6E9C]/10 text-[#0A6E9C] text-[10px] sm:text-sm font-semibold px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full">
                  {consultant.category}
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1.5 text-[#0A6E9C]">
                <BadgeCheck className="h-3 w-3 sm:h-5 sm:w-5" />
                <span className="text-[11px] sm:text-base font-semibold">Verified</span>
              </div>

              <p className="hidden sm:block text-gray-500 text-base mt-1.5">
                {consultant.qualification}
              </p>

              <p className="text-[11px] sm:text-lg font-semibold text-gray-900 sm:text-gray-900 mt-0.5 truncate">
                {consultant.specialization}
              </p>

              <div className="flex items-center gap-1 sm:gap-2 text-gray-500 text-[10px] sm:text-base mt-0.5 sm:mt-1.5">
                <CalendarCheck className="h-3 w-3 sm:h-5 sm:w-5" />
                {consultant.experience} Experience
              </div>

              {/* Fee shown inline on mobile only */}
              {consultant.fees && (
                <div className="flex sm:hidden items-center gap-1 text-green-600 font-bold text-sm mt-1">
                  <IndianRupee className="h-3.5 w-3.5" />
                  {consultant.fees.replace("₹", "")}
                </div>
              )}
            </div>

            {consultant.fees && (
              <>
                <div className="hidden sm:block w-px self-stretch bg-gray-200" />
                <div className="hidden sm:block sm:w-36 shrink-0">
                  <p className="text-base text-gray-500">Consultation Fees</p>
                  <p className="flex items-center text-4xl font-bold text-green-600 mt-1">
                    <IndianRupee className="h-8 w-8" />
                    {consultant.fees.replace("₹", "")}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Pagination dots */}
        {consultants.length > 1 && (
          <div className="flex justify-center gap-2 mt-3 sm:mt-5">
            {consultants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  current === index
                    ? "w-5 sm:w-6 bg-[#0A6E9C]"
                    : "w-1.5 sm:w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}