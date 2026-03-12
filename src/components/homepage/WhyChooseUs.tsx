import { Scale, Award, Users, BookOpen } from "lucide-react";

const reasons = [
  { icon: Scale, title: "Supreme Court Representation", description: "Experience before the highest court." },
  { icon: Award, title: "20+ Years Experience", description: "Combined expertise in major practice areas." },
  { icon: Users, title: "Pan-India Network", description: "Presence across all major states." },
  { icon: BookOpen, title: "Research-Driven Approach", description: "Deep analytical legal strategy." },
];

export default function WhyChooseUs() {
  return (
    <section className="p-6 border-t animate-fadeIn bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#163C0F] mb-4">
          Why Choose Commercial Law Chamber
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="reason-card">
              <r.icon className="icon-primary" />
              <h3 className="title-primary">{r.title}</h3>
              <p>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
