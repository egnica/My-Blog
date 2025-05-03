import Posts from "../posts.json";

export async function GET() {
  const baseUrl = "https://latestartdev.com";

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

  const postUrls = Posts.posts.map((post) => ({
    loc: `${baseUrl}/posts/${post.query}`,
    lastmod: new Date(post.modified_time || post.date).toISOString(),
  }));

  const urls = [...staticUrls, ...postUrls]
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
    </url>`
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
