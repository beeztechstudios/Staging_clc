"use client";

import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { urlFor } from "@/lib/sanity";
import type { MatterUpdatePreview } from "@/types/sanity";

interface MatterUpdatesProps {
    initialMatters: MatterUpdatePreview[];
}

export default function MatterUpdates({ initialMatters }: MatterUpdatesProps) {
    return (
        <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
            <HeroAnimations />

            <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
                <HeroBackground />
                <div className="relative z-10 mx-auto max-w-2xl px-0 sm:px-4">
                    <h1 className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
                        Matter Updates
                    </h1>
                    <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
                        Recent case reflections, litigation takeaways, and key judicial developments.
                    </p>
                </div>
            </section>

            <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-dotted border-[#22461B]/50">
                {initialMatters.length > 0 ? (
                    <div className="grid lg:grid-cols-2 gap-6">
                        {initialMatters.map((matter) => (
                            <article
                                key={matter._id}
                                className="bg-white border border-[#22461B]/30 rounded-[16px] p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
                            >
                                {matter.featuredImage?.asset?._ref && (
                                    <Link href={`/matter-updates/${matter.slug.current}`} className="mb-4 block">
                                        <Image
                                            src={urlFor(matter.featuredImage).width(700).height(360).fit("crop").url()}
                                            alt={matter.featuredImage.alt || matter.title}
                                            width={700}
                                            height={360}
                                            className="w-full h-auto object-cover border border-[#22461B]/20 hover:border-[#163C0F] transition-all"
                                        />
                                    </Link>
                                )}

                                <div className="hero-text-meta flex items-center gap-2 mb-3">
                                    <Calendar className="h-4 w-4" />
                                    <time dateTime={matter.publishedAt}>
                                        {format(new Date(matter.publishedAt), "MMMM d, yyyy")}
                                    </time>
                                </div>

                                <Link href={`/matter-updates/${matter.slug.current}`}>
                                    <h2 className="hero-text-card-title mb-2 hover:text-[#1a4a1a] transition-colors">
                                        {matter.title}
                                    </h2>
                                </Link>

                                {/* <p className="hero-text-practice-desc text-[#5A6F55] mb-2">{matter.subtitle}</p>
                                <p className="hero-text-body text-[#374151] mb-5">{matter.excerpt}</p> */}

                                <Link
                                    href={`/matter-updates/${matter.slug.current}`}
                                    className="hero-text-button inline-flex items-center justify-center gap-2 border border-[#163C0F]/30 text-[#163C0F] hover:bg-[#163C0F] hover:text-white transition-colors px-4 py-2 mt-auto w-full sm:w-auto"
                                >
                                    Read Full Matter <ArrowRight className="h-4 w-4" />
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div
                        className="px-[8px] py-[17px]"
                        style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
                    >
                        <p className="hero-text-practice-desc">No matter updates published yet.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
