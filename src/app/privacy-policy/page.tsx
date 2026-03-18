import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Privacy Policy | Commercial Law Chamber",
    description:
        "Read the Privacy Policy of Commercial Law Chamber regarding data collection, confidentiality, cookies, and data protection rights.",
    alternates: { canonical: "https://www.clclaw.in/privacy-policy" },
    robots: "index, follow",
};

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <section className="py-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10 bg-white border-b border-dotted border-[#22461B]">
                <h1 className="hero-text-title text-[#163C0F] mb-3">Privacy Policy</h1>
                <p className="hero-text-body text-[#374151]">
                    At CLC, we are committed to safeguarding the privacy and confidentiality of our clients, website visitors, and stakeholders. We may collect personal, professional, and financial information such as name, contact details, tax identifiers, and documents shared for taxation, compliance, and advisory services, solely for legitimate business purposes including service delivery, regulatory compliance, communication, and internal record-keeping. All client data is treated as strictly confidential and is protected through appropriate technical and organizational security measures, and we do not sell, rent, or trade personal information to third parties, except where disclosure is required by law, regulatory authorities, or trusted service providers bound by confidentiality obligations. Our website may use cookies and analytics tools to enhance user experience, and by using our website or services, you consent to the collection and use of information in accordance with this policy. We retain data only for as long as necessary to fulfil professional, legal, and regulatory requirements, and users may request access, correction, or deletion of their personal information subject to applicable laws. For any privacy-related queries, users may contact us through the details provided on our website.
                </p>

                <div className="mt-6 space-y-4 text-[#374151]">
                    <p className="hero-text-body">
                        <strong>Data Security:</strong> CLC adopts appropriate technical and organisational security measures to protect personal information against unauthorised access, misuse, alteration, disclosure, or destruction. Access to such information is restricted only to authorised personnel who require it for professional service delivery and who are bound by strict confidentiality obligations. We take reasonable steps to ensure that all information handled by us is processed in a secure and responsible manner.
                    </p>

                    <p className="hero-text-body">
                        <strong>External Links:</strong> Our website may contain links to third-party websites or resources for informational purposes. CLC does not control or assume responsibility for the privacy practices, content, or policies of such external websites, and users are encouraged to review the privacy policies of those websites before providing any personal information.
                    </p>

                    <p className="hero-text-body">
                        <strong>Data Protection Rights:</strong> Subject to applicable laws, individuals may request access to, correction of, or deletion of their personal information held by CLC. Where applicable, individuals may also withdraw consent previously provided for the processing of their personal data, though such withdrawal may affect our ability to provide certain services.
                    </p>

                    <p className="hero-text-body">
                        CLC processes personal data in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 and, where applicable, the General Data Protection Regulation (GDPR) and other relevant international data protection frameworks.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
