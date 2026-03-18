import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Indirect Tax Practice (GST & Customs) | Commercial Law Chamber",
    description:
        "Indirect Tax Practice (GST & Customs): comprehensive advisory, compliance management, enforcement support and litigation across GST, customs, and allied indirect taxes.",
    alternates: {
        canonical: "https://www.clclaw.in/practice-area/indirect-tax-gst-customs",
    },
};

const keyServiceAreas = [
    {
        title: "GST Advisory, Compliance & Audit Management",
        items: [
            "Comprehensive GST advisory on transactions, contracts & supply chain models",
            "Assistance with registrations, returns, reconciliations & compliance frameworks",
            "GST departmental audit support, enterprise-wide GST health checks",
            "Advisory on place of supply, intermediary services, branch-to-branch transactions",
            "Taxability of digital services, cross-border commerce & e-commerce platforms",
        ],
    },
    {
        title: "Supply Chain Planning & Optimisation",
        items: [
            "GST-aligned restructuring of distribution models",
            "Warehousing & logistics tax advisory including cross-state movement & job work",
            "Valuation of captive transactions, related-party supply & business restructuring",
        ],
    },
    {
        title: "Classification, Valuation & ITC Matters",
        items: [
            "Classification of goods/services including engineering, digital & composite supplies",
            "Valuation disputes, royalty/license fee additions, related-party transactions",
            "ITC planning & dispute management involving blocked credits, reversals, mismatches, and fraud allegations",
        ],
    },
    {
        title: "Customs Advisory",
        items: [
            "Classification & valuation under the Customs Act",
            "FTP advisory: Advance Authorisation, EPCG, DFIA benefits",
            "Analysis of FTA-origin benefits & compliance documentation",
            "Port clearance support, warehousing & bonded-manufacturing issues",
        ],
    },
    {
        title: "Investigations & Enforcement",
        items: [
            "Representation in DGGI, DRI & Anti-evasion actions",
            "Handling summons, search proceedings, seizure & provisional release",
            "Responses to SCNs, audit objections, and adjudication proceedings",
        ],
    },
    {
        title: "Litigation & Appellate Representation",
        items: [
            "Refund disputes IGST exports, unutilised ITC, inverted duty",
            "Anti-profiteering defence & price-impact assessment",
            "Representation before AA, Appellate Tribunals, AAR/AAAR, High Courts & Supreme Court",
            "Constitutional challenges to GST rules, notifications & delegated legislation",
        ],
    },
];

const selectExperience = [
    "Acted in several landmark GST disputes involving refunds, SCNs, anti-profiteering and transitional credit.",
    "Represented major manufacturing and import-driven companies in customs valuation & classification matters.",
    "Advised on GST restructuring for nationwide supply chains across FMCG, automotive, electronics and retail sectors.",
    "Led high-value constitutional challenges to GST provisions, benefiting industry-wide stakeholders.",
];

export default function IndirectTaxPracticePage() {
    return (
        <Layout>
            <div className="flex-1 bg-white xl:mx-10">
                <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="max-w-6xl mx-auto md:mt-[104px]">
                        <h1 className="hero-text-title text-[#111827] mb-2">Indirect Tax Practice (GST & Customs)</h1>
                        <p className="hero-text-body italic text-[#111827] mb-6">
                            Comprehensive Advisory, Compliance Management, Enforcement Support & Litigation Across GST, Customs, and Allied Indirect Taxes
                        </p>

                        <div className="space-y-5">
                            <p className="hero-text-body text-[#111827]">
                                Our Indirect Tax practice is recognised for delivering practical, sector-focused, and legally robust advice that empowers businesses to manage GST and customs complexities with confidence. As businesses evolve, GST rules, investigation practices, and judicial trends continue to shift making expert guidance indispensable.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                CLC supports clients across GST advisory, compliance management, tax risk review, custom duty planning, supply-chain optimisation, and high-stakes investigations conducted by DGGI, DRI, Audit Commissionerates, and GST authorities. Our team is adept at handling contentious matters including classification, valuation, intermediary disputes, credit restrictions, export refunds, anti-profiteering issues, and constitutional challenges to notifications, circulars, and amendments.
                            </p>

                            <p className="hero-text-body text-[#111827]">
                                We also provide end-to-end customs law support on valuation, classification, FTA benefits, port clearances, warehousing, and enforcement proceedings, making our indirect tax practice comprehensive and uniquely positioned for businesses engaged in domestic and cross-border trade.
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
