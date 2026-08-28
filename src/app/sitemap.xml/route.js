import { getBlogPosts } from "../../lib/blogData";

export const revalidate = 60;

function toIsoDate(value) {
  if (!value) return new Date().toISOString();

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? new Date().toISOString()
    : date.toISOString();
}

export async function GET() {
  const baseUrl = "https://latestartdev.com";
  const posts = await getBlogPosts();

  const staticUrls = [
    {
      loc: `${baseUrl}/`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/posts`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${baseUrl}/posts/archive`,
      lastmod: new Date().toISOString(),
    },
  ];

  const postUrls = posts.map((post) => ({
    loc: `${baseUrl}/posts/${post.slug}`,
    lastmod: toIsoDate(post.modified_time || post.published_time || post.date),
  }));

  const urls = [...staticUrls, ...postUrls]
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>`,
    )
    .join("\n");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
