import { client } from "./sanity";

export async function getNewsPost(slug: string) {
  return await client.fetch(
    `*[_type == "newsUpdate" && slug.current == $slug][0]{
      title,
      excerpt,
      content,
      featuredImage,
      publishedAt,
      type,
      downloadUrl,
      seo,
      slug
    }`,
    { slug }
  );
}
