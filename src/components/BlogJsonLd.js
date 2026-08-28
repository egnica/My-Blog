export default function BlogJsonLd({ post }) {
  const image = post.meta_image || post.hero_image;
  const keywords = Array.isArray(post.keywords) ? post.keywords : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    keywords: keywords.join(", "),
    author: {
      "@type": "Person",
      name: "Nicholas Egner",
      url: "https://nicholasegner.com",
      image:
        "https://latestartbucket.s3.us-east-2.amazonaws.com/image/nicholas-egner.jpg",
      sameAs: [
        "https://www.linkedin.com/in/nicholas-egner",
        "https://github.com/egnica",
        "https://twitter.com/NicholasEgner",
        "https://nicholasegner.com",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Late Start Dev",
      logo: {
        "@type": "ImageObject",
        url: "https://nciholasegner.s3.us-east-2.amazonaws.com/images/NE-blue.svg",
      },
    },
    datePublished: post.published_time || post.date,
    dateModified:
      post.modified_time || post.published_time || post.date,
    mainEntityOfPage: `https://latestartdev.com/posts/${post.slug}`,
    image,
  };

  if (post.primaryVideo) {
    const video = post.primaryVideo;
    const sources =
      typeof video.src === "string"
        ? { mp4: video.src }
        : video.src || {};

    jsonLd.video = {
      "@type": "VideoObject",
      name: video.title || post.title,
      description: video.description || post.description,
      thumbnailUrl: video.thumbnail ? [video.thumbnail] : image ? [image] : [],
      uploadDate: post.published_time || post.date,
      duration: video.duration || undefined,
      contentUrl:
        video.contentUrl || sources.mp4 || sources.webm || undefined,
      embedUrl: video.embedUrl || video.youtube?.url || undefined,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
