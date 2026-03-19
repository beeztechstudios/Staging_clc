import { Metadata } from "next";
import Layout from "@/components/Layout";
import MatterUpdates from "@/components/MatterUpdates";
import { client, queries } from "@/lib/sanity";
import type { MatterUpdatePreview } from "@/types/sanity";

async function getMatterUpdates(): Promise<MatterUpdatePreview[]> {
    try {
        return await client.fetch(queries.getAllMatterUpdates, {}, { next: { revalidate: 60 } });
    } catch (error) {
        console.error("Error fetching matter updates:", error);
        return [];
    }
}

export const metadata: Metadata = {
    title: "Matter Updates | Commercial Law Chamber",
    description:
        "Read recent matter updates, case reflections, and litigation takeaways from the tax and commercial disputes team at Commercial Law Chamber.",
    alternates: {
        canonical: "https://www.clclaw.in/matter-updates",
    },
};

export default async function MatterUpdatesPage() {
    const matterUpdates = await getMatterUpdates();

    return (
        <Layout>
            <MatterUpdates initialMatters={matterUpdates} />
        </Layout>
    );
}
