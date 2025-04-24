import React from "react";
import { Metadata } from "next";
import Head from "next/head"; // required only in pages router — not needed in App Router!

export default function BlogJsonLd({ post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Nicholas Egner",
    },
    publisher: {
      "@type": "Organization",
      name: "Late Start Dev",
      logo: {
        "@type": "ImageObject",
        url: "https://latestartbucket.s3.us-east-2.amazonaws.com/image/your-logo.png", // update if needed
      },
    },
    datePublished: post.published_time || "2025-01-01",
    dateModified: post.modified_time || post.published_time || "2025-01-01",
    mainEntityOfPage: `https://latestartdev.com/posts/${post.query}`,
    image: post.article_image,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
