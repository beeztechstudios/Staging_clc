import Image from "next/image";

const team = [
  { name: "Vivek Sarin", designation: "Partner", image: "https://res.cloudinary.com/ddbu8cm4z/image/upload/v1764677693/vivek_u4uf7o.jpg" },
  { name: "Shreyas Srivastava", designation: "Partner", image: "https://res.cloudinary.com/ddbu8cm4z/image/upload/v1764677693/shreya_t2gey6.jpg" },
];

export default function TeamSection() {
  return (
    <section className="p-6 border-t animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#163C0F] mb-4">
          Our Team
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {team.map((m, i) => (
            <div key={i} className="team-card">
              <div className="aspect-square relative">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="p-4 bg-[#B3C7AB] text-center">
                <h3 className="title-primary">{m.name}</h3>
                <p className="text-sm text-[#163C0F] font-medium">{m.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
