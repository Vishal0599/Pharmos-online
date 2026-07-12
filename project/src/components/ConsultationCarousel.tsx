import { useEffect, useMemo, useState } from "react";
import { openWhatsApp } from "../config";
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
  category: string;
};

export default function ConsultationCarousel() {
  const consultants = useMemo(() => {
    const list: Consultant[] = [];

    doctorSpecialties.forEach((specialty: any) => {
      specialty.doctors.forEach((doctor: any) => {
        list.push({
          ...doctor,
          category: specialty.name,
        });
      });
    });

    pharmacists.forEach((person: any) => {
      list.push({
        ...person,
        category: "Medication Expert",
      });
    });

    nutritionists.forEach((person: any) => {
      list.push({
        ...person,
        category: "Nutritionist",
      });
    });

    physiotherapists.forEach((person: any) => {
      list.push({
        ...person,
        category: "Physiotherapist",
      });
    });

    return list;
  }, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (consultants.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % consultants.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [consultants.length]);

  if (consultants.length === 0) {
    return (
      <section className="px-4 mt-6">
        <div className="flex items-center mb-4">
          <div className="w-1 h-6 bg-[#F9A825] rounded-full mr-2"></div>

          <h2 className="text-lg font-bold">
            Our Consultation Services
          </h2>
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
      <div className="flex items-center mb-4">
        <div className="w-1 h-7 bg-[#F9A825] rounded-full mr-2"></div>

        <h2 className="text-lg font-bold">
          Our Doctors and Experts
        </h2>
      </div>

      <div className="relative overflow-hidden bg-white rounded-3xl shadow-md border border-gray-100 p-5 transition-all duration-500">
        <div className="flex justify-between items-center">

          <span className="bg-green-100 text-green-900 text-xs font-bold px-5 py-2 rounded">
            ● Available
          </span>

          <span className="text-xs text-[#0A6E9C] font-semibold">
            {consultant.category}
          </span>

        </div>

        <h3 className="text-lg font-bold text-gray-900">
          {consultant.name}
        </h3>

        <p className="text-gray-500 mt-1">
          {consultant.qualification}
        </p>

        <div className="mt-2 space-y-1">

          <div className="flex justify-between">
            <span>Specialization</span>
            <span className="font-semibold">
              {consultant.specialization}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Experience</span>
            <span className="font-semibold">
              {consultant.experience}
            </span>
          </div>
        {consultant.fees && (
            <div className="flex justify-between">
              <span>Fees</span>
              <span className="font-semibold text-green-600">
                {consultant.fees}
              </span>
            </div>
          )}

        </div>
                {consultants.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {consultants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
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