"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import styles from "../app/posts/[query]/page.module.css";
import Image from "next/image";
import { marked } from "marked";

function markdownHtml(value = "") {
  return marked.parse(value, {
    gfm: true,
    breaks: true,
  });
}

function normalizeText(value = "") {
  return String(value)
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[\t ]+$/g, ""))
    .join("\n")
    .trim();
}

function ParagraphBlock({ block }) {
  const chunks = normalizeText(block.text)
    .split(/\n\s*\n+/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  if (!chunks.length) return null;

  const hasSupportingCopy = chunks.length > 1;

  return (
    <div className={styles.content_container}>
      <div className={styles.text_block}>
        {chunks.map((chunk, index) => (
          <div
            key={index}
            className={
              hasSupportingCopy && index === 0
                ? styles.paragraph_lead
                : styles.paragraph_body
            }
            dangerouslySetInnerHTML={{
              __html: markdownHtml(chunk),
            }}
          />
        ))}
      </div>
    </div>
  );
}

function markdownInline(value = "") {
  return marked.parseInline(value);
}

function VideoBlock({ block }) {
  const src =
    typeof block.src === "string"
      ? { mp4: block.src }
      : block.src || {};

  const directSrc = src.mp4 || src.webm;

  if (!directSrc) return null;

  return (
    <div className={styles.video_container}>
      <video
        controls={block.controls !== false}
        autoPlay={Boolean(block.autoplay)}
        muted={Boolean(block.muted)}
        loop={Boolean(block.loop)}
        playsInline
        preload="metadata"
        poster={block.poster}
      >
        {src.webm && <source src={src.webm} type="video/webm" />}
        {src.mp4 && <source src={src.mp4} type="video/mp4" />}
      </video>

      {block.youtube?.url && (
        <a
          className={styles.video_link}
          href={block.youtube.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {block.youtube.label || "Watch on YouTube"}
        </a>
      )}
    </div>
  );
}

export default function BlogPostContent({ post }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  const blocks = Array.isArray(post.contentBlocks) ? post.contentBlocks : [];

  return (
    <div className={styles.full_cont}>
      {blocks.map((block, index) => {
        const key = `${block.type || "block"}-${index}`;

        switch (block.type) {
          case "paragraph":
          case "text":
            return <ParagraphBlock key={key} block={block} />;

          case "heading": {
            const level = Math.min(Math.max(Number(block.level) || 2, 1), 6);
            const HeadingTag = `h${level}`;

            return (
              <div key={key} className={styles.content_container}>
                <HeadingTag>{block.text}</HeadingTag>
              </div>
            );
          }

          case "image":
            if (!block.src) return null;

            return (
              <figure key={key} className={styles.image_figure}>
                <div className={styles.image_container}>
                  <Image
                    className={styles.img}
                    src={block.src}
                    fill
                    sizes="(max-width: 900px) 94vw, 900px"
                    alt={block.alt || post.title}
                  />
                </div>

                {block.caption && (
                  <figcaption className={styles.image_caption}>
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "video":
            return <VideoBlock key={key} block={block} />;

          case "code": {
            const language = block.language || block.lang || "javascript";

            return (
              <div key={key} className={styles.code_container}>
                {block.filename && (
                  <p className={styles.code_filename}>{block.filename}</p>
                )}
                <pre className={`language-${language}`}>
                  <code className={`language-${language}`}>
                    {block.code || ""}
                  </code>
                </pre>
              </div>
            );
          }

          case "list":
          case "ul": {
            const ListTag = block.ordered ? "ol" : "ul";

            return (
              <div key={key} className={styles.content_container}>
                <ListTag>
                  {(block.items || []).map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      dangerouslySetInnerHTML={{
                        __html: markdownInline(item),
                      }}
                    />
                  ))}
                </ListTag>
              </div>
            );
          }

          case "quote":
            return (
              <div key={key} className={styles.content_container}>
                <blockquote
                  className={styles.quote}
                  dangerouslySetInnerHTML={{
                    __html: markdownHtml(block.text),
                  }}
                />
              </div>
            );

          case "callout":
            return (
              <div key={key} className={styles.content_container}>
                <div
                  className={styles.callout}
                  dangerouslySetInnerHTML={{
                    __html: markdownHtml(block.text),
                  }}
                />
              </div>
            );

          case "embed":
            if (!block.src) return null;

            return (
              <div key={key} className={styles.embed_container}>
                <iframe
                  src={block.src}
                  title={block.title || `Embedded content for ${post.title}`}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            );

          case "link":
            if (!block.href) return null;

            return (
              <div key={key} className={styles.content_container}>
                <a
                  href={block.href}
                  target={block.target}
                  rel={block.rel}
                >
                  {block.label || block.href}
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
