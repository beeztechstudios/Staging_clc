import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Terms & Conditions | Commercial Law Chamber",
    description:
        "Read the Terms and Conditions and legal disclaimer for using the Commercial Law Chamber website.",
    alternates: { canonical: "https://www.clclaw.in/terms-and-conditions" },
    robots: "index, follow",
};

export default function TermsAndConditionsPage() {
    return (
        <Layout>
            <section className="py-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10 bg-white border-b border-dotted border-[#22461B]">
                <h1 className="hero-text-title text-[#163C0F] mb-3">Terms &amp; Conditions</h1>
                <p id="disclaimer" className="hero-text-body text-[#374151]">
                    By accessing and using the website of CLC, you agree to these Terms and Conditions. The information provided on this website is for general informational purposes only and does not constitute legal, tax, or professional advice, nor does it establish a client relationship unless formally agreed in writing. While we strive for accuracy, we do not guarantee the completeness or reliability of the content and shall not be liable for any loss arising from its use. Users must provide accurate information and use the website only for lawful purposes. All content, including text and materials, is the intellectual property of CLC and may not be reproduced without prior consent. We reserve the right to update these Terms and website content at any time, and continued use of the website implies acceptance of any changes. These Terms shall be governed by the applicable laws of India.
                </p>
            </section>
        </Layout>
    );
}
