import { Metadata } from "next";
import Layout from "@/components/Layout";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Commercial & Regulatory Disputes Practice | Commercial Law Chamber",
    description:
        "Commercial & Regulatory Disputes Practice: resolving complex commercial conflicts and regulatory challenges with precision, intelligence, and sector-driven strategy.",
    alternates: {
        canonical: "https://www.clclaw.in/practice-area/commercial-regulatory-disputes",
    },
};

const keyServiceAreas = [
    {
        title: "Commercial Disputes",
        items: [
            "Contractual disputes, shareholder conflicts & JV breakdowns",
            "Enforcement of indemnities, recovery suits & damages claims",
            "Supply chain, distribution & manufacturing disputes",
            "Pre-litigation risk strategy, settlement negotiation & mediation advisory",
            "Representation before civil courts, commercial courts & domestic arbitration panels",
        ],
    },
    {
        title: "Regulatory Disputes & Enforcement",
        items: [
            "Compliance advisory under SEBI Regulations, Companies Act & FEMA",
            "Representation in enforcement actions, inquiries & adjudication proceedings",
            "Assistance in responding to notices, inspection findings & supervisory actions",
            "Challenges to regulatory, administrative & quasi-judicial orders",
            "Advisory on governance failures, management disputes & board-level concerns",
        ],
    },
    {
        title: "Sector-Focused Regulatory Support",
        items: [
            "Financial services & fintech",
            "Manufacturing, infrastructure & energy",
            "Startups, technology & digital platforms",
            "Pharma, healthcare & consumer industries",
        ],
    },
];

const selectExperience = [
    "Represented clients in high-value shareholder oppression and mismanagement disputes, including urgent relief and board-control litigation.",
    "Acted in complex supply-chain and distribution matters involving nationwide commercial operations.",
    "Advised and defended clients in SEBI, FEMA, and Companies Act enforcement proceedings.",
    "Challenged regulatory and administrative actions before High Courts, securing significant relief for clients.",
    "Assisted clients in strategic negotiations and settlements in large business disagreements, ensuring continuity and risk mitigation.",
];

export default function CommercialRegulatoryDisputesPage() {
    return (
        <Layout>
            <div className="flex-1 bg-white xl:mx-10">
                <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="max-w-6xl mx-auto md:mt-[104px]">
                        <Link
                            href="/practice-area"
                            className="inline-flex items-center hero-text-meta text-[#163C0F] hover:underline mb-4"
                        >
                            &larr; Back to Practice Areas
                        </Link>
                        <h1 className="hero-text-title text-[#163C0f] mb-2">Commercial & Regulatory Disputes Practice</h1>
                        <p className="hero-text-body italic text-[#111827] mb-6">
                            Resolving Complex Commercial Conflicts and Regulatory Challenges With Precision, Intelligence & Sector-Driven Strategy
                        </p>

                        <div className="space-y-5">
                            <p className="hero-text-body text-[#111827]">
                                CLC&apos;s Commercial & Regulatory Disputes practice specialises in managing diverse, nuanced, and high-stakes conflicts that arise across industries and regulatory frameworks. Our strength lies in combining litigation excellence with a deep understanding of operational realities, governance structures, and sector-specific regulations.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                We assist clients in resolving contractual disputes, JV/shareholder conflicts, governance breakdowns, corporate fraud issues, indemnity and recovery actions, and supply chain disputes. Alongside commercial conflicts, we also advise on regulatory investigations and litigation involving SEBI, FEMA, Competition Commission, Registrar of Companies, MCA, and other sectoral regulators.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                With experience across civil courts, commercial courts, NCLT, High Courts, arbitral tribunals, and quasi-judicial bodies, our team delivers practical, persuasive, and outcome-oriented dispute management.
                            </p>
                        </div>

                        <h2 className="hero-text-section-heading text-[#163C0F] mt-10 mb-5">Key Service Areas</h2>

                        <div className="space-y-6">
                            {keyServiceAreas.map((section) => (
                                <section key={section.title}>
                                    <h3 className="hero-text-practice-title text-[#1F2937] mb-3">{section.title}</h3>
                                    <ul className="space-y-2 pl-5 list-disc marker:text-[#111827]">
                                        {section.items.map((item) => (
                                            <li key={item} className="hero-text-body text-[#111827]">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>

                        <h2 className="hero-text-section-heading text-[#163C0F] mt-10 mb-5">Select Experience</h2>
                        <ul className="space-y-2 pl-5 list-disc marker:text-[#111827] mb-10">
                            {selectExperience.map((item) => (
                                <li key={item} className="hero-text-body text-[#111827]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
