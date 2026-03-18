import { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
    title: "Cookie Policy | Commercial Law Chamber",
    description:
        "Read the Cookie Policy of Commercial Law Chamber regarding cookie usage, analytics, and browser controls.",
    alternates: { canonical: "https://www.clclaw.in/cookie-policy" },
    robots: "index, follow",
};

export default function CookiePolicyPage() {
    return (
        <Layout>
            <section className="py-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10 bg-white border-b border-dotted border-[#22461B]">
                <h1 className="hero-text-title text-[#163C0F] mb-3">Cookie Policy</h1>
                <p className="hero-text-body text-[#374151]">
                    Our website uses cookies and similar tracking technologies to enhance user experience, analyse website traffic, and improve our services. Cookies are small text files stored on your device that help us understand user preferences, website usage patterns, and system performance. We may use essential cookies for website functionality, analytics cookies to monitor performance, and preference cookies to remember user settings. These cookies do not collect sensitive personal or financial information and are used only for legitimate business and operational purposes. By continuing to browse our website, you consent to the use of cookies in accordance with this policy; however, you may choose to disable or manage cookies through your browser settings, though this may affect certain features and functionality of the website.
                </p>
            </section>
        </Layout>
    );
}
