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
          <div className="w-1 h-6 bg-[#F9A825] rounded-full mr-2"></div>
          <h2 className="text-lg font-bold">Our Consultation Services</h2>
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
      <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900">
            Our Doctors and Experts
          </h2>

          {consultants.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Available badge */}
        <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
          Available
        </span>

        {/* Card */}
        <div className="rounded-3xl border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-6 px-6 py-4">
          {/* Photo */}
          <div className="relative w-36 h-36 shrink-0 mx-auto sm:mx-0">
            {consultant.photo ? (
              <img
                src={consultant.photo}
                alt={consultant.name}
                className="w-32 h-36 rounded-2xl object-cover"
              />
            ) : (
              <div className="w-32 h-36 rounded-2xl bg-[#E8F0FB] flex items-center justify-center">
                <User className="h-10 w-10 text-[#0A6E9C]/30" />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {consultant.name}
                </h3>
                <span className="shrink-0 bg-[#0A6E9C]/10 text-[#0A6E9C] text-sm font-semibold px-4 py-1.5 rounded-full">
                  {consultant.category}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-1.5 text-[#0A6E9C]">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-base font-semibold">Verified</span>
              </div>

              <p className="text-gray-500 text-base mt-1.5">
                {consultant.qualification}
              </p>

              <p className="font-semibold text-gray-900 text-lg mt-0.5">
                {consultant.specialization}
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-base mt-1.5">
                <CalendarCheck className="h-5 w-5" />
                {consultant.experience} Experience
              </div>
            </div>

            {consultant.fees && (
              <>
                <div className="hidden sm:block w-px self-stretch bg-gray-200" />
                <div className="sm:w-36 shrink-0">
                  <p className="text-base text-gray-500">Consultation Fee</p>
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
          <div className="flex justify-center gap-2 mt-5">
            {consultants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "w-6 bg-[#0A6E9C]"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}