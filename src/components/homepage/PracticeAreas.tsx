import { Calculator, Gavel, Building, Globe } from "lucide-react";

const practiceAreas = [
  { icon: Calculator, title: "Direct & Indirect Tax", description: "Comprehensive tax advisory & litigation." },
  { icon: Gavel, title: "Commercial Disputes", description: "Strategic dispute resolution services." },
  { icon: Building, title: "Regulatory Disputes", description: "Corporate compliance & regulatory guidance." },
  { icon: Globe, title: "International Tax", description: "Cross-border structuring & planning." },
];

export default function PracticeAreas() {
  return (
    <section className="p-4 bg-gray-50 border-t animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#163C0F] mb-3">
          Core Practice Areas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {practiceAreas.map((area, index) => (
            <div key={index} className="area-card">
              <area.icon className="icon-primary" />
              <h3 className="title-primary">{area.title}</h3>
              <p className="text-gray-700">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
