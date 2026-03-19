import { Metadata } from "next";
import Layout from "@/components/Layout";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { format } from "date-fns";
import { client, urlFor, queries } from "@/lib/sanity";
import { SanityContentRenderer } from "@/lib/sanityContent";
import type { MatterUpdate } from "@/types/sanity";

type Params = { slug: string | string[] | undefined };

async function getMatterBySlug(slug?: string | string[]): Promise<MatterUpdate | null> {
    if (!slug || Array.isArray(slug)) return null;
    try {
        return await client.fetch(queries.getMatterUpdateBySlug, { slug });
    } catch {
        return null;
    }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
    const matter = await getMatterBySlug(slug);

    if (!matter) return { title: "Matter Update Not Found" };

    const title = matter.seo?.metaTitle || matter.title;
    const description = matter.seo?.metaDescription || matter.excerpt;
    const ogImage = matter.featuredImage
        ? urlFor(matter.featuredImage).width(1200).height(630).url()
        : null;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime: matter.publishedAt,
            images: ogImage ? [{ url: ogImage }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ogImage ? [ogImage] : [],
        },
    };
}

export default async function MatterUpdateDetailPage({ params }: { params: Params }) {
    const resolvedParams = await params;
    const slug = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug;
    const matter = await getMatterBySlug(slug);

    if (!matter) {
        return (
            <Layout>
                <div className="flex-1 bg-white py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10">
                    <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]" />
                    <p className="hero-text-body text-[#4B5563]">
                        Matter update not found. {" "}
                        <Link href="/matter-updates" className="text-[#163C0F] font-semibold hover:underline">
                            ← Back to Matter Updates
                        </Link>
                    </p>
                </div>
            </Layout>
        );
    }

    const publishedDate = matter.publishedAt ? new Date(matter.publishedAt) : new Date();

    return (
        <Layout>
            <div className="flex-1 bg-white xl:mx-10">
                <section className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-dotted border-[#22461B]/50">
                    <Link
                        href="/matter-updates"
                        className="hero-text-meta inline-flex items-center gap-2 mb-6 hover:text-[#163C0F] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Matter Updates
                    </Link>

                    <h1 className="hero-text-article-title hero-title mb-3">{matter.title}</h1>
                    <p className="hero-text-body italic text-[#5A6F55] mb-4">{matter.subtitle}</p>

                    <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-[#5A6F55]" />
                        <time dateTime={publishedDate.toISOString()} className="hero-text-meta">
                            {format(publishedDate, "MMMM d, yyyy")}
                        </time>
                    </div>
                </section>

                <section className="py-8 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
                    {matter.featuredImage && (
                        <img
                            src={urlFor(matter.featuredImage).width(900).height(460).url()}
                            alt={matter.featuredImage.alt || matter.title}
                            className="w-full h-auto mb-8 rounded-[4px]"
                        />
                    )}

                    <div className="hero-text-article-body">
                        <SanityContentRenderer content={matter.content} />
                    </div>

                    <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
                </section>
            </div>
        </Layout>
    );
}
