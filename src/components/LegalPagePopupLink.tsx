"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type LegalPageKey = "privacy-policy" | "terms-and-conditions" | "cookie-policy";

type LegalPagePopupLinkProps = {
    label: string;
    pageKey: LegalPageKey;
};

const legalContent: Record<
    LegalPageKey,
    {
        title: string;
        paragraphs: string[];
    }
> = {
    "privacy-policy": {
        title: "Privacy Policy",
        paragraphs: [
            "At CLC, we are committed to safeguarding the privacy and confidentiality of our clients, website visitors, and stakeholders. We may collect personal, professional, and financial information such as name, contact details, tax identifiers, and documents shared for taxation, compliance, and advisory services, solely for legitimate business purposes including service delivery, regulatory compliance, communication, and internal record-keeping.",
            "All client data is treated as strictly confidential and is protected through appropriate technical and organizational security measures, and we do not sell, rent, or trade personal information to third parties, except where disclosure is required by law, regulatory authorities, or trusted service providers bound by confidentiality obligations.",
            "Our website may use cookies and analytics tools to enhance user experience, and by using our website or services, you consent to the collection and use of information in accordance with this policy. We retain data only for as long as necessary to fulfil professional, legal, and regulatory requirements, and users may request access, correction, or deletion of their personal information subject to applicable laws.",
            "For any privacy-related queries, users may contact us through the details provided on our website.",
            "Data Security: CLC adopts appropriate technical and organisational security measures to protect personal information against unauthorised access, misuse, alteration, disclosure, or destruction.",
            "External Links: Our website may contain links to third-party websites or resources for informational purposes. CLC does not control or assume responsibility for the privacy practices, content, or policies of such external websites.",
            "Data Protection Rights: Subject to applicable laws, individuals may request access to, correction of, or deletion of their personal information held by CLC.",
        ],
    },
    "terms-and-conditions": {
        title: "Terms & Conditions",
        paragraphs: [
            "By accessing and using the website of CLC, you agree to these Terms and Conditions.",
            "The information provided on this website is for general informational purposes only and does not constitute legal, tax, or professional advice, nor does it establish a client relationship unless formally agreed in writing.",
            "While we strive for accuracy, we do not guarantee the completeness or reliability of the content and shall not be liable for any loss arising from its use.",
            "Users must provide accurate information and use the website only for lawful purposes.",
            "All content, including text and materials, is the intellectual property of CLC and may not be reproduced without prior consent.",
            "We reserve the right to update these Terms and website content at any time, and continued use of the website implies acceptance of any changes.",
            "These Terms shall be governed by the applicable laws of India.",
        ],
    },
    "cookie-policy": {
        title: "Cookie Policy",
        paragraphs: [
            "Our website uses cookies and similar tracking technologies to enhance user experience, analyse website traffic, and improve our services.",
            "Cookies are small text files stored on your device that help us understand user preferences, website usage patterns, and system performance.",
            "We may use essential cookies for website functionality, analytics cookies to monitor performance, and preference cookies to remember user settings.",
            "These cookies do not collect sensitive personal or financial information and are used only for legitimate business and operational purposes.",
            "By continuing to browse our website, you consent to the use of cookies in accordance with this policy; however, you may choose to disable or manage cookies through your browser settings, though this may affect certain features and functionality of the website.",
        ],
    },
};

const LegalPagePopupLink = ({ label, pageKey }: LegalPagePopupLinkProps) => {
    const page = legalContent[pageKey];

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="cursor-pointer whitespace-nowrap transition-colors hover:text-[#163C0F]"
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "11px",
                        letterSpacing: "0.6px",
                        color: "#6B7280",
                        textTransform: "uppercase",
                    }}
                >
                    {label}
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-4xl max-h-[90vh] bg-white overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="hero-text-section-heading text-[#163C0F]">
                        {page.title}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    {page.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="hero-text-body text-[#374151]">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LegalPagePopupLink;
