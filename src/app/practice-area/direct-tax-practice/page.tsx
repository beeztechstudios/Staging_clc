import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Direct Tax Practice | Commercial Law Chamber",
    description:
        "Direct Tax Practice: end-to-end advisory, compliance, and dispute resolution across corporate, individual, and cross-border tax matters.",
    alternates: {
        canonical: "https://www.clclaw.in/practice-area/direct-tax-practice",
    },
};

const keyServiceAreas = [
    {
        title: "Corporate & Individual Tax Advisory",
        items: [
            "Structuring of business operations, investments, and asset transfers",
            "Capital gains advisory in shares, securities, real estate, slump sale, and business transfers",
            "Tax planning for HNIs, family offices, promoter families & investment entities",
            "Taxation of ESOPs, equity compensation & startup taxation matters",
            "Residency, remittance, exit tax, and cross-border mobility planning",
        ],
    },
    {
        title: "Cross-Border Tax Structuring & International Tax",
        items: [
            "DTAA interpretation, treaty relief planning & dispute support",
            "PE/Business Connection evaluations & documentation",
            "Guidance on global mobility, foreign subsidiaries & holding structures",
            "Outbound/inbound investment structuring",
            "Foreign remittance documentation (Form 15CA/CB) and treaty benefit certifications",
        ],
    },
    {
        title: "Transfer Pricing",
        items: [
            "TP planning, benchmarking & documentation",
            "Defence during audits, review, and assessments",
            "Representation in TP disputes before DRP, ITAT, and Courts",
            "Advisory on inter-company agreements, shared services, IP licensing & cost-allocation models",
        ],
    },
    {
        title: "Transaction Structuring & Reorganisations",
        items: [
            "Tax-efficient mergers, demergers & business restructuring",
            "Profit repatriation structures-dividends, royalties, buybacks, capital reduction, inter-company funding",
            "Start-up structuring & capital-raising tax strategy",
            "Evaluation under GAAR, POEM, and substance-based requirements",
        ],
    },
    {
        title: "Tax Disputes & Litigation",
        items: [
            "Representation before AO, CIT(A), DRP, ITAT, High Courts & Supreme Court",
            "Disallowances, re-openings, reassessments, and penalty disputes",
            "Constitutional challenges to tax provisions & retrospective amendments",
            "Litigation involving funds, permanent establishments, treaty interpretations & TP adjustments",
        ],
    },
];

const selectExperience = [
    "Advised the Government of India on a major bilateral tax treaty dispute involving complex cross-border income characterisation.",
    "Structured multi-layered tax-efficient cross-border flows and repatriation strategies for global conglomerates.",
    "Represented clients in high-value Transfer Pricing litigation involving intangibles, intra-group services & financial transactions.",
    "Assisted large Indian and multinational groups in reorganisations requiring GAAR/POEM analysis and treaty-efficient pathways.",
];

export default function DirectTaxPracticePage() {
    return (
        <Layout>
            <div className="flex-1 bg-white xl:mx-10">
                <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="max-w-6xl mx-auto md:mt-[104px]">
                        <h1 className="hero-text-title text-[#111827] mb-2">Direct Tax Practice</h1>
                        <p className="hero-text-body italic text-[#111827] mb-6">
                            End-to-End Advisory, Compliance, and Dispute Resolution Across Corporate, Individual, and Cross-Border Tax Matters
                        </p>

                        <div className="space-y-5">
                            <p className="hero-text-body text-[#111827]">
                                Our Direct Tax practice delivers comprehensive, strategic, and forward-looking tax support to businesses, high-net-worth individuals, multinational groups, funds, and promoter families. CLC&apos;s team brings deep industry experience, technical expertise, and a solution-oriented approach to help clients navigate the evolving landscape of Indian taxation, global tax reforms, and multi-jurisdictional tax challenges.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                We provide holistic advisory spanning corporate tax structuring, capital-market transactions, business reorganisations, cross-border tax planning, transfer pricing, and taxation of high-net-worth individuals, aligned with both commercial objectives and regulatory requirements. With an emphasis on long-term sustainability, risk mitigation, and tax efficiency, we guide clients through the complete lifecycle of tax planning, reporting, assessment, and litigation.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                On the dispute side, our lawyers regularly appear before Assessing Officers, Commissioner (Appeals), the Income Tax Appellate Tribunal (ITAT), High Courts, and the Supreme Court in complex matters involving TP adjustments, treaty benefit claims, fund taxation, PE exposure, GAAR, corporate reorganisations, MAT disputes, and interpretation of tax statutes. Our strategic, data-driven representation ensures rigorous defence, persuasive advocacy, and successful outcomes in high-stakes matters.
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
