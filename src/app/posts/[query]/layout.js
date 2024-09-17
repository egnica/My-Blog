import Posts from "../../posts.json";

export async function generateMetadata(prams) {
  const queryString = await prams.params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  return {
    title: foundPost.title,
    description: foundPost.description,
    keywords: foundPost.keywords,
    openGraph: {
      title: foundPost.title,
      site_name: "Late Start Dev",
      description: foundPost.description,
      url: `https://latestartdev.com/posts/${foundPost.query}`,
      type: "article",
      images: [
        {
          url: foundPost.article_image,
          width: 1200,
          height: 630,
        },
      ],
      article: {
        published_time: foundPost.published_time,
        modified_time: foundPost.modified_time,
        author: "https://nicholasegner.com/",
        section: "Blog",
        tag: foundPost.keywords,
      },
      twitter: {
        card: "summary_large_image",
        site: "@NicholasEgner",
        creator: "@NicholasEgner",
        title: foundPost.title,
        description: foundPost.description,
        image: foundPost.article_image,
      },
      other: {
        canonical: `https://latestartdev.com/posts/${foundPost.query}`,
        author: "NicholasEgner",
        viewport: "width=device-width, initial-scale=1",
        robots: "index, follow",
      },
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
