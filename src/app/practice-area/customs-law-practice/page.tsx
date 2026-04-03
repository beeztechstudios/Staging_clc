import { Metadata } from "next";
import Layout from "@/components/Layout";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Customs Law Practice | Commercial Law Chamber",
    description:
        "Customs Law Practice: advisory, compliance, enforcement defence and litigation across India's cross-border trade ecosystem.",
    alternates: {
        canonical: "https://www.clclaw.in/practice-area/customs-law-practice",
    },
};

const keyServiceAreas = [
    {
        title: "Customs Classification, Valuation & Duty Assessment",
        items: [
            "Classification advisory for complex, composite, engineering, pharma, digital & tech products",
            "Valuation guidance for related-party imports, royalties, licence fees & TP-linked adjustments",
            "Review of additions under Rule 10, special valuation provisions, and transaction-value disputes",
            "Litigation on re-assessment, demand notices & differential duty recovery",
        ],
    },
    {
        title: "FTA/Origin Benefits & Cross-Border Structuring",
        items: [
            "Advisory on origin rules under ASEAN, SAFTA, CEPA, CECA & other FTAs",
            "Vendor verification, origin compliance reviews & preventive documentation",
            "Defence in denial of preferential duty claims & post-clearance investigations",
            "Risk mapping for global supply chains & sourcing strategies",
        ],
    },
    {
        title: "Port Clearance, Warehousing & Bonded Operations",
        items: [
            "End-to-end support on delays, detention, demurrage, and regulatory objections",
            "Bonded warehouse setups, Section 65 manufacturing, and duty deferment strategies",
            "Guidance on re-imports, re-warehousing, port transfers & short-landing issues",
            "Compliance with allied laws FSSAI, BIS, WPC, Drug Licensing, PQ, etc.",
        ],
    },
    {
        title: "DGFT, FTP Schemes & Incentive Advisory",
        items: [
            "EPCG, Advance Authorisation, DFIA & remission scheme compliance",
            "Export-obligation disputes, redemption delays & SCNs",
            "Advisory on RoDTEP, RoSCTL & drawback-related issues",
            "Representations before DGFT, Policy Committees & Appellate Authorities",
        ],
    },
    {
        title: "Investigations, Enforcement & Anti-Smuggling Proceedings",
        items: [
            "Representation in DRI, SIIB, Preventive, Audit & Anti-evasion investigations",
            "Assistance during search, seizure, summons, arrests & provisional release",
            "Drafting robust replies to SCNs & audit objections",
            "Managing criminal prosecution risks & compounding matters",
        ],
    },
    {
        title: "Customs Litigation & Appellate Representation",
        items: [
            "Litigation before adjudicating authorities, Commissioners & CESTAT",
            "Appeals before High Courts & the Supreme Court",
            "Writ petitions challenging detention, seizure, valuation, classification & ultra vires notifications",
            "Defence in penalty, confiscation & extended-limitation disputes",
        ],
    },
];

const selectExperience = [
    "Represented large import-driven manufacturing companies in multi-crore valuation and classification disputes, securing favourable outcomes before adjudicating authorities and CESTAT.",
    "Advised multinational FMCG and consumer-goods companies on FTA-origin compliance and preferential duty optimisation, preventing denial of benefits during post-clearance audits.",
    "Successfully defended clients in DRI investigations involving allegations of undervaluation, royalty additions, and misdeclaration of goods, obtaining reduced penalties and favourable adjudication.",
    "Assisted global logistics and distribution companies in establishing bonded warehouse and Section 65 operations, resulting in significant duty deferment and supply-chain efficiency.",
    "Secured urgent court relief for importers facing illegal detention and delayed clearances, ensuring the release of time-sensitive consignments and mitigation of demurrage liability.",
    "Advised exporters on EPCG/Advance Authorisation disputes involving export obligation shortfalls and remission scheme complications before DGFT and Appellate Authorities.",
    "Represented leading chemical, electronics, and automotive clients in High Court writ petitions challenging seizure orders, extended-limitation demands, and procedural irregularities",
];

export default function CustomsLawPracticePage() {
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
                        <h1 className="hero-text-title text-[#163C0F] mb-2">Customs Law Practice</h1>
                        <p className="hero-text-body italic text-[#111827] mb-6">
                            Advisory, Compliance, Enforcement Defence & Litigation Across India's Cross-Border Trade Ecosystem
                        </p>

                        <div className="space-y-5">
                            <p className="hero-text-body text-[#111827]">
                                CLC&apos;s Customs Law practice offers comprehensive legal support across the full spectrum of import-export regulations, global trade compliance, port procedures, investigations, and high-stakes customs litigation. With India&apos;s trade environment becoming increasingly enforcement-driven, led by DRI, SIIB, Customs Audit, and valuation/anti-smuggling wing, businesses require precise, strategic, and commercially aware guidance. Our team brings together deep legal expertise, sectoral knowledge, and an understanding of global supply chains to help clients manage risk, ensure smooth operations, and resolve disputes efficiently.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                We advise on classification, valuation, FTA-origin benefits, special schemes under DGFT, port clearance issues, audit objections, warehousing, EPCG/Advance Authorisation, duty exemptions, bonded manufacturing, and cross-border structuring. Our lawyers regularly support businesses during searches, seizures, summons, investigations, adjudications, and appellate proceedings before CESTAT, High Courts and the Supreme Court.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                From import-driven industries like electronics, automotive, chemicals, consumer goods, and e-commerce, to export-led sectors such as textiles, pharma, and engineering goods, we provide end-to-end customs risk management and trade facilitation support tailored to each industry&apos;s operational realities.
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
