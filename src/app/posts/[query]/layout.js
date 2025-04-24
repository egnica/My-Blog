import Posts from "../../posts.json";

export async function generateMetadata(params) {
  const queryString = params.params.query;
  const foundPost = Posts.posts.find((item) => item.query === queryString);

  if (!foundPost) {
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
    };
  }

  return {
    title: foundPost.title,
    description: foundPost.description,
    keywords: foundPost.keywords,
    author: "Nicholas Egner",
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
      author: "Nicholas Egner",
      viewport: "width=device-width, initial-scale=1",
      robots: "index, follow",
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
