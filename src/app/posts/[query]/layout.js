import {
  BLOG_REVALIDATE_SECONDS,
  getBlogPost,
} from "../../../lib/blogData";

export const revalidate = BLOG_REVALIDATE_SECONDS;

export async function generateMetadata({ params }) {
  const foundPost = await getBlogPost(params.query, { includeHidden: true });

  if (!foundPost) {
    return {
      title: "Post Not Found",
      description: "This post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `https://latestartdev.com/posts/${foundPost.slug}`;
  const image = foundPost.meta_image || foundPost.hero_image;

  return {
    title: foundPost.meta_title || foundPost.title,
    description:
      foundPost.meta_description ||
      foundPost.description ||
      "A post from Nicholas Egner on Late Start Dev.",
    keywords: foundPost.keywords,
    authors: [{ name: "Nicholas Egner", url: "https://nicholasegner.com" }],

    robots: {
      index: foundPost.live,
      follow: foundPost.live,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: foundPost.meta_title || foundPost.title,
      siteName: "Late Start Dev",
      description:
        foundPost.meta_description ||
        foundPost.description ||
        "A post from Nicholas Egner on Late Start Dev.",
      url,
      type: "article",
      publishedTime: foundPost.published_time || undefined,
      modifiedTime: foundPost.modified_time || undefined,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: foundPost.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      site: "@NicholasEgner",
      creator: "@NicholasEgner",
      title: foundPost.meta_title || foundPost.title,
      description:
        foundPost.meta_description ||
        foundPost.description ||
        "A post from Nicholas Egner on Late Start Dev.",
      images: image ? [image] : [],
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
