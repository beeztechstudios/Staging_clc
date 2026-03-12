import HeroAnimations from "@/lib/heroAnimation";
import { Calculator, Building, FileText, Scale } from "lucide-react";

const Expertise = () => {
  const practiceAreas = [
    {
      title: "Direct Tax Practice",
      icon: Calculator,
      subtitle: "End-to-End Advisory, Compliance, and Dispute Resolution Across Corporate, Individual, and Cross-Border Tax Matters",
      reverseGradient: true,
      para1: "Our Direct Tax practice delivers comprehensive, strategic, and forward-looking tax support to businesses, high-net-worth individuals, multinational groups, funds, and promoter families. CLC's team brings deep industry experience, technical expertise, and a solution-oriented approach to help clients navigate the evolving landscape of Indian taxation, global tax reforms, and multi-jurisdictional tax challenges.",
      para2: "We provide holistic advisory spanning corporate tax structuring, capital-market transactions, business reorganisations, cross-border tax planning, transfer pricing, and taxation of high-net-worth individuals, aligned with both commercial objectives and regulatory requirements. With an emphasis on long-term sustainability, risk mitigation, and tax efficiency, we guide clients through the complete lifecycle of tax planning, reporting, assessment, and litigation.",
      para3: "On the dispute side, our lawyers regularly appear before Assessing Officers, Commissioner (Appeals), the Income Tax Appellate Tribunal (ITAT), High Courts, and the Supreme Court in complex matters involving TP adjustments, treaty benefit claims, fund taxation, PE exposure, GAAR, corporate reorganisations, MAT disputes, and interpretation of tax statutes. Our strategic, data-driven representation ensures rigorous defence, persuasive advocacy, and successful outcomes in high-stakes matters.",
      keyServices: {
        "Corporate & Individual Tax Advisory": [
          "Structuring of business operations, investments, and asset transfers",
          "Capital gains advisory in shares, securities, real estate, slump sale, and business transfers",
          "Tax planning for HNIs, family offices, promoter families & investment entities",
          "Taxation of ESOPs, equity compensation & startup taxation matters",
          "Residency, remittance, exit tax, and cross-border mobility planning"
        ],
        "Cross-Border Tax Structuring & International Tax": [
          "DTAA interpretation, treaty relief planning & dispute support",
          "PE/Business Connection evaluations & documentation",
          "Guidance on global mobility, foreign subsidiaries & holding structures",
          "Outbound/inbound investment structuring",
          "Foreign remittance documentation (Form 15CA/CB) and treaty benefit certifications"
        ],
        "Transfer Pricing": [
          "TP planning, benchmarking & documentation",
          "Defence during audits, review, and assessments",
          "Representation in TP disputes before DRP, ITAT, and Courts",
          "Advisory on inter-company agreements, shared services, IP licensing & cost-allocation models"
        ],
        "Transaction Structuring & Reorganisations": [
          "Tax-efficient mergers, demergers & business restructuring",
          "Profit repatriation structures—dividends, royalties, buybacks, capital reduction, inter-company funding",
          "Start-up structuring & capital-raising tax strategy",
          "Evaluation under GAAR, POEM, and substance-based requirements"
        ],
        "Tax Disputes & Litigation": [
          "Representation before AO, CIT(A), DRP, ITAT, High Courts & Supreme Court",
          "Disallowances, re-openings, reassessments, and penalty disputes",
          "Constitutional challenges to tax provisions & retrospective amendments",
          "Litigation involving funds, permanent establishments, treaty interpretations & TP adjustments"
        ]
      },
      experience: [
        "Advised the Government of India on a major bilateral tax treaty dispute involving complex cross-border income characterisation.",
        "Structured multi-layered tax-efficient cross-border flows and repatriation strategies for global conglomerates.",
        "Represented clients in high-value Transfer Pricing litigation involving intangibles, intra-group services & financial transactions.",
        "Assisted large Indian and multinational groups in reorganisations requiring GAAR/POEM analysis and treaty-efficient pathways."
      ]
    },
    {
      title: "Indirect Tax Practice (GST & Customs)",
      icon: FileText,
      subtitle: "Comprehensive Advisory, Compliance Management, Enforcement Support & Litigation Across GST, Customs, and Allied Indirect Taxes",
      reverseGradient: false,
      para1: "Our Indirect Tax practice is recognised for delivering practical, sector-focused, and legally robust advice that empowers businesses to manage GST and customs complexities with confidence. As businesses evolve, GST rules, investigation practices, and judicial trends continue to shift making expert guidance indispensable.",
      para2: "CLC supports clients across GST advisory, compliance management, tax risk review, custom duty planning, supply-chain optimisation, and high-stakes investigations conducted by DGGI, DRI, Audit Commissionerates, and GST authorities. Our team is adept at handling contentious matters including classification, valuation, intermediary disputes, credit restrictions, export refunds, anti-profiteering issues, and constitutional challenges to notifications, circulars, and amendments.",
      para3: "We also provide end-to-end customs law support on valuation, classification, FTA benefits, port clearances, warehousing, and enforcement proceedings, making our indirect tax practice comprehensive and uniquely positioned for businesses engaged in domestic and cross-border trade.",
      keyServices: {
        "GST Advisory, Compliance & Audit Management": [
          "Comprehensive GST advisory on transactions, contracts & supply chain models",
          "Assistance with registrations, returns, reconciliations & compliance frameworks",
          "GST departmental audit support, enterprise-wide GST health checks",
          "Advisory on place of supply, intermediary services, branch-to-branch transactions",
          "Taxability of digital services, cross-border commerce & e-commerce platforms"
        ],
        "Supply Chain Planning & Optimisation": [
          "GST-aligned restructuring of distribution models",
          "Warehousing & logistics tax advisory including cross-state movement & job work",
          "Valuation of captive transactions, related-party supply & business restructuring"
        ],
        "Classification, Valuation & ITC Matters": [
          "Classification of goods/services including engineering, digital & composite supplies",
          "Valuation disputes, royalty/license fee additions, related-party transactions",
          "ITC planning & dispute management involving blocked credits, reversals, mismatches, and fraud allegations"
        ],
        "Customs Advisory": [
          "Classification & valuation under the Customs Act",
          "FTP advisory: Advance Authorisation, EPCG, DFIA benefits",
          "Analysis of FTA-origin benefits & compliance documentation",
          "Port clearance support, warehousing & bonded-manufacturing issues"
        ],
        "Investigations & Enforcement": [
          "Representation in DGGI, DRI & Anti-evasion actions",
          "Handling summons, search proceedings, seizure & provisional release",
          "Responses to SCNs, audit objections, and adjudication proceedings"
        ],
        "Litigation & Appellate Representation": [
          "Refund disputes IGST exports, unutilised ITC, inverted duty",
          "Anti-profiteering defence & price-impact assessment",
          "Representation before AA, Appellate Tribunals, AAR/AAAR, High Courts & Supreme Court",
          "Constitutional challenges to GST rules, notifications & delegated legislation"
        ]
      },
      experience: [
        "Acted in several landmark GST disputes involving refunds, SCNs, anti-profiteering and transitional credit.",
        "Represented major manufacturing and import-driven companies in customs valuation & classification matters.",
        "Advised on GST restructuring for nationwide supply chains across FMCG, automotive, electronics and retail sectors.",
        "Led high-value constitutional challenges to GST provisions, benefiting industry-wide stakeholders."
      ]
    },
    {
      title: "Commercial & Regulatory Disputes Practice",
      icon: Building,
      subtitle: "Resolving Complex Commercial Conflicts and Regulatory Challenges With Precision, Intelligence & Sector-Driven Strategy",
      reverseGradient: true,
      para1: "CLC's Commercial & Regulatory Disputes practice specialises in managing diverse, nuanced, and high-stakes conflicts that arise across industries and regulatory frameworks. Our strength lies in combining litigation excellence with a deep understanding of operational realities, governance structures, and sector-specific regulations.",
      para2: "We assist clients in resolving contractual disputes, JV/shareholder conflicts, governance breakdowns, corporate fraud issues, indemnity and recovery actions, and supply chain disputes. Alongside commercial conflicts, we also advise on regulatory investigations and litigation involving SEBI, FEMA, Competition Commission, Registrar of Companies, MCA, and other sectoral regulators.",
      para3: "With experience across civil courts, commercial courts, NCLT, High Courts, arbitral tribunals, and quasi-judicial bodies, our team delivers practical, persuasive, and outcome-oriented dispute management.",
      keyServices: {
        "Commercial Disputes": [
          "Contractual disputes, shareholder conflicts & JV breakdowns",
          "Enforcement of indemnities, recovery suits & damages claims",
          "Supply chain, distribution & manufacturing disputes",
          "Pre-litigation risk strategy, settlement negotiation & mediation advisory",
          "Representation before civil courts, commercial courts & domestic arbitration panels"
        ],
        "Regulatory Disputes & Enforcement": [
          "Compliance advisory under SEBI Regulations, Companies Act & FEMA",
          "Representation in enforcement actions, inquiries & adjudication proceedings",
          "Assistance in responding to notices, inspection findings & supervisory actions",
          "Challenges to regulatory, administrative & quasi-judicial orders",
          "Advisory on governance failures, management disputes & board-level concerns"
        ],
        "Sector-Focused Regulatory Support": [
          "Financial services & fintech",
          "Manufacturing, infrastructure & energy",
          "Startups, technology & digital platforms",
          "Pharma, healthcare & consumer industries"
        ]
      },
      experience: [
        "Represented clients in high-value shareholder oppression and mismanagement disputes, including urgent relief and board-control litigation.",
        "Acted in complex supply-chain and distribution matters involving nationwide commercial operations.",
        "Advised and defended clients in SEBI, FEMA, and Companies Act enforcement proceedings.",
        "Challenged regulatory and administrative actions before High Courts, securing significant relief for clients.",
        "Assisted clients in strategic negotiations and settlements in large business disagreements, ensuring continuity and risk mitigation."
      ]
    },
    {
      title: "Customs Law Practice",
      icon: Scale,
      subtitle: "Advisory, Compliance, Enforcement Defence & Litigation Across India's Cross-Border Trade Ecosystem",
      reverseGradient: false,
      para1: "CLC's Customs Law practice offers comprehensive legal support across the full spectrum of import - export regulations, global trade compliance, port procedures, investigations, and high-stakes customs litigation. Our team brings together deep legal expertise, sectoral knowledge, and an understanding of global supply chains to help clients manage risk, ensure smooth operations, and resolve disputes efficiently.",
      para2: "We advise on classification, valuation, FTA-origin benefits, special schemes under DGFT, port clearance issues, audit objections, warehousing, EPCG/Advance Authorisation, duty exemptions, bonded manufacturing, and cross-border structuring. Our lawyers regularly support businesses during searches, seizures, summons, investigations, adjudications, and appellate proceedings before CESTAT, High Courts and the Supreme Court.",
      para3: "From import-driven industries like electronics, automotive, chemicals, consumer goods, and e-commerce, to export-led sectors such as textiles, pharma, and engineering goods, we provide end-to-end customs risk management and trade facilitation support tailored to each industry's operational realities.",
      keyServices: {
        "Customs Classification, Valuation & Duty Assessment": [
          "Classification advisory for complex, composite, engineering, pharma, digital & tech products",
          "Valuation guidance for related-party imports, royalties, licence fees & TP-linked adjustments",
          "Review of additions under Rule 10, special valuation provisions, and transaction-value disputes",
          "Litigation on re-assessment, demand notices & differential duty recovery"
        ],
        "FTA/Origin Benefits & Cross-Border Structuring": [
          "Advisory on origin rules under ASEAN, SAFTA, CEPA, CECA & other FTAs",
          "Vendor verification, origin compliance reviews & preventive documentation",
          "Defence in denial of preferential duty claims & post-clearance investigations",
          "Risk mapping for global supply chains & sourcing strategies"
        ],
        "Port Clearance, Warehousing & Bonded Operations": [
          "End-to-end support on delays, detention, demurrage, and regulatory objections",
          "Bonded warehouse setups, Section 65 manufacturing, and duty deferment strategies",
          "Guidance on re-imports, re-warehousing, port transfers & short-landing issues",
          "Compliance with allied laws FSSAI, BIS, WPC, Drug Licensing, PQ, etc."
        ],
        "DGFT, FTP Schemes & Incentive Advisory": [
          "EPCG, Advance Authorisation, DFIA & remission scheme compliance",
          "Export-obligation disputes, redemption delays & SCNs",
          "Advisory on RoDTEP, RoSCTL & drawback-related issues",
          "Representations before DGFT, Policy Committees & Appellate Authorities"
        ],
        "Investigations, Enforcement & Anti-Smuggling Proceedings": [
          "Representation in DRI, SIIB, Preventive, Audit & Anti-evasion investigations",
          "Assistance during search, seizure, summons, arrests & provisional release",
          "Drafting robust replies to SCNs & audit objections",
          "Managing criminal prosecution risks & compounding matters"
        ],
        "Customs Litigation & Appellate Representation": [
          "Litigation before adjudicating authorities, Commissioners & CESTAT",
          "Appeals before High Courts & the Supreme Court",
          "Writ petitions challenging detention, seizure, valuation, classification & ultra vires notifications",
          "Defence in penalty, confiscation & extended-limitation disputes"
        ]
      },
      experience: [
        "Represented large import-driven manufacturing companies in multi-crore valuation and classification disputes, securing favourable outcomes before adjudicating authorities and CESTAT.",
        "Advised multinational FMCG and consumer-goods companies on FTA-origin compliance and preferential duty optimisation, preventing denial of benefits during post-clearance audits.",
        "Successfully defended clients in DRI investigations involving allegations of undervaluation, royalty additions, and misdeclaration of goods, obtaining reduced penalties and favourable adjudication.",
        "Assisted global logistics and distribution companies in establishing bonded warehouse and Section 65 operations, resulting in significant duty deferment and supply-chain efficiency.",
        "Secured urgent court relief for importers facing illegal detention and delayed clearances, ensuring the release of time-sensitive consignments and mitigation of demurrage liability.",
        "Advised exporters on EPCG/Advance Authorisation disputes involving export obligation shortfalls and remission scheme complications before DGFT and Appellate Authorities.",
        "Represented leading chemical, electronics, and automotive clients in High Court writ petitions challenging seizure orders, extended-limitation demands, and procedural irregularities"
      ]
    }
  ];

  return (
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />
      {/* Header */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-dashed border-[#22461B]/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">Practice Areas & Comprehensive Tax Services</p>
          <p className="hero-text-subpara hero-para">
            Research-intensive, solution-driven approach  to align with legal and business objectives.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <div className="space-y-6 hero-para sm:space-y-8">
        {practiceAreas.map((area, index) => (
          <section
            key={index}
            className={`p-6 sm:p-8 md:p-12 ${index < practiceAreas.length - 1 ? "border-b border-dotted border-[#22461B]/50" : ""}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="max-w-6xl mx-auto">
                <div className="border border-[#22461B]/30 rounded-[16px] p-6 sm:p-8 transition-all">

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#B3C7AB]/40 p-3 flex-shrink-0">
                      <area.icon className="h-8 w-8 text-[#163C0F]/80" />
                    </div>

                    <div className="flex-1">
                      <h2 className="hero-text-section-heading text-[#163C0F]">
                        {area.title}
                      </h2>

                      <p className="hero-text-subpara" style={{ textAlign: "left" }}>
                        {area.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid  gap-6 sm:gap-8">


                    <div>

                      {/* Paragraphs */}
                      {[area.para1, area.para2, area.para3].map((para, i) => (
                        <p
                          key={i}
                          className="hero-text-body text-gray-600 mb-4"
                        >
                          {para}
                        </p>
                      ))}

                      {/* Key Services */}
                      <h3 className="hero-text-section-heading text-[#163C0F] mt-6 mb-4">
                        Key Service Areas:
                      </h3>

                      {Object.entries(area.keyServices).map(([category, services]) => (
                        <div key={category} className="mb-5">
                          <h4 className="hero-text-practice-title mb-2">
                            {category}
                          </h4>

                          <ul className="space-y-2">
                            {(services as string[]).map((service: string, i: number) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="bg-[#B3C7AB] rounded-full p-1 mt-1 flex-shrink-0">
                                  <div className="w-1.5 h-1.5 bg-[#163C0F] rounded-full" />
                                </div>
                                <span className="hero-text-practice-desc text-[#374151]">
                                  {service}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    </div>


                    <div>

                      <h3 className="hero-text-section-heading text-[#163C0F] mb-4">
                        Select Experience:
                      </h3>

                      <div className="space-y-3">

                        {area.experience.map((exp, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-4"
                            style={{
                              background: area.reverseGradient
                                ? "linear-gradient(to left, #CFE2C8, #FFFFFF)"
                                : "linear-gradient(to right, #CFE2C8, #FFFFFF)",
                            }}
                          >

                            <FileText className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />

                            <p className="hero-text-practice-desc">
                              {exp}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
