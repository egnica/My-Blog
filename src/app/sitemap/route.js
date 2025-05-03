import Posts from "../posts.json";
export async function GET() {
  const baseUrl = "https://latestartdev.com";

  const urls = Posts.posts.map((post) => {
    return `
        <url>
          <loc>${baseUrl}/posts/${post.query}</loc>
          <lastmod>${new Date(
            post.lastModified || post.date
          ).toISOString()}</lastmod>
        </url>`;
  });

  const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("\n")}
      </urlset>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
