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

export async function getMatterUpdate(slug: string) {
  return await client.fetch(
    `*[_type == "matterUpdate" && slug.current == $slug][0]{
      title,
      subtitle,
      excerpt,
      content,
      featuredImage,
      publishedAt,
      isNew,
      isFeatured,
      seo,
      slug
    }`,
    { slug }
  );
}
