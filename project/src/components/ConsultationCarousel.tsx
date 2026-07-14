import { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  GraduationCap,
  Briefcase,
  IndianRupee,
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

  // initials for the avatar placeholder, e.g. "Dr. Aditi Rao" -> "AR"
  const initials = consultant.name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

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
          <span className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            Available
          </span>

          <span className="bg-[#0A6E9C]/10 text-[#0A6E9C] text-xs font-semibold px-3 py-1 rounded-full">
            {consultant.category}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-3">
          {consultant.photo ? (
            <img
              src={consultant.photo}
              alt={consultant.name}
              className="h-16 w-16 shrink-0 rounded-2xl object-cover border-2 border-[#0A6E9C]/10 shadow-sm"
            />
          ) : (
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-[#0A6E9C]/10 flex items-center justify-center font-bold text-[#0A6E9C] text-xl">
              {initials}
            </div>
          )}
          <div>
            <div className="flex items-center gap-1">
              <h3 className="text-lg font-bold text-gray-900">
                {consultant.name}
              </h3>
              <BadgeCheck className="h-4 w-4 text-[#0A6E9C]" />
            </div>
            <p className="text-gray-500 text-sm">{consultant.qualification}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <GraduationCap className="h-4 w-4 text-[#0A6E9C] mt-0.5" />
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-medium">
                Specialization
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {consultant.specialization}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Briefcase className="h-4 w-4 text-[#0A6E9C] mt-0.5" />
            <div>
              <p className="text-[10px] uppercase text-gray-400 font-medium">
                Experience
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {consultant.experience}
              </p>
            </div>
          </div>

          {consultant.fees && (
            <div className="flex items-start gap-2">
              <IndianRupee className="h-4 w-4 text-green-600 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-medium">
                  Fees
                </p>
                <p className="text-sm font-semibold text-green-600">
                  {consultant.fees}
                </p>
              </div>
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
